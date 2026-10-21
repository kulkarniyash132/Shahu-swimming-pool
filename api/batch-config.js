'use strict';

const { getDatabase, isAdminRequest, sendApiError } = require('../lib/db');

function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try { return JSON.parse(req.body); } catch (_) { return null; }
  }
  return null;
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  // The public booking form can request details for one selected slot.
  // Requests without ?slot= require the admin password.
  if (req.method === 'GET') {
    const slot = typeof req.query.slot === 'string' ? req.query.slot.trim() : '';
    if (!slot) {
      const auth = isAdminRequest(req);
      if (!auth.ok) return res.status(auth.statusCode).json({ error: auth.error });
    }

    try {
      const sql = await getDatabase();
      if (slot) {
        const rows = await sql`
          SELECT slot, coaches, students
          FROM batch_config
          WHERE slot = ${slot}
          LIMIT 1
        `;
        if (rows.length === 0) return res.status(404).json({ error: 'Slot not configured.' });
        return res.status(200).json(rows[0]);
      }

      const rows = await sql`SELECT slot, coaches, students FROM batch_config ORDER BY slot`;
      return res.status(200).json(rows);
    } catch (error) {
      return sendApiError(res, error);
    }
  }

  const auth = isAdminRequest(req);
  if (!auth.ok) return res.status(auth.statusCode).json({ error: auth.error });

  const body = readJsonBody(req);
  const batches = body && body.batches;
  if (!Array.isArray(batches) || batches.length === 0 || batches.length > 100) {
    return res.status(400).json({ error: 'A batches array containing 1–100 entries is required.' });
  }

  const seenSlots = new Set();
  for (const batch of batches) {
    if (!batch || typeof batch.slot !== 'string' || !batch.slot.trim() || batch.slot.length > 50) {
      return res.status(400).json({ error: 'Every batch must have a valid slot label.' });
    }
    if (!Number.isInteger(batch.coaches) || batch.coaches < 0 || batch.coaches > 50) {
      return res.status(400).json({ error: 'Coach counts must be whole numbers between 0 and 50.' });
    }
    if (!Number.isInteger(batch.students) || batch.students < 0 || batch.students > 500) {
      return res.status(400).json({ error: 'Student counts must be whole numbers between 0 and 500.' });
    }
    if (seenSlots.has(batch.slot)) {
      return res.status(400).json({ error: 'The batches list contains a duplicate slot.' });
    }
    seenSlots.add(batch.slot);
  }

  try {
    const sql = await getDatabase();
    // One transaction means all batch counts save together or none do.
    const queries = batches.map((batch) => sql`
      INSERT INTO batch_config (slot, coaches, students, updated_at)
      VALUES (${batch.slot.trim()}, ${batch.coaches}, ${batch.students}, NOW())
      ON CONFLICT (slot) DO UPDATE SET
        coaches = EXCLUDED.coaches,
        students = EXCLUDED.students,
        updated_at = NOW()
    `);
    await sql.transaction(queries);
    return res.status(200).json({ message: 'Batch config saved successfully.' });
  } catch (error) {
    return sendApiError(res, error);
  }
};

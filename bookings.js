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

  if (req.method === 'GET') {
    const auth = isAdminRequest(req);
    if (!auth.ok) return res.status(auth.statusCode).json({ error: auth.error });

    try {
      const sql = await getDatabase();
      const rows = await sql`
        SELECT id, name, phone, email, program, date, time, notes, created_at
        FROM bookings
        ORDER BY created_at DESC, id DESC
        LIMIT 1000
      `;
      return res.status(200).json(rows);
    } catch (error) {
      return sendApiError(res, error);
    }
  }

  if (req.method === 'POST') {
    const body = readJsonBody(req);
    if (!body || typeof body !== 'object') {
      return res.status(400).json({ error: 'A valid JSON booking is required.' });
    }

    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const program = typeof body.program === 'string' ? body.program.trim() : '';
    const date = typeof body.date === 'string' ? body.date.trim() : '';
    const time = typeof body.time === 'string' ? body.time.trim() : '';
    const notes = typeof body.notes === 'string' ? body.notes.trim() : '';

    if (!name || !phone || !program || !date || !time) {
      return res.status(400).json({ error: 'Please provide name, phone, program, date, and time.' });
    }
    if (name.length > 150 || phone.length > 40 || email.length > 254 || program.length > 100 || date.length > 20 || time.length > 50 || notes.length > 3000) {
      return res.status(400).json({ error: 'One or more booking fields are too long.' });
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address or leave it blank.' });
    }

    try {
      const sql = await getDatabase();
      const rows = await sql`
        INSERT INTO bookings (name, phone, email, program, date, time, notes)
        VALUES (${name}, ${phone}, ${email}, ${program}, ${date}, ${time}, ${notes || null})
        RETURNING id
      `;
      return res.status(201).json({
        message: 'Booking successfully created!',
        bookingId: rows[0].id
      });
    } catch (error) {
      return sendApiError(res, error);
    }
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Method not allowed.' });
};

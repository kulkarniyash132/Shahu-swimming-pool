'use strict';

const { getDatabase, sendApiError } = require('../lib/db');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const sql = await getDatabase();
    const rows = await sql`SELECT slot, coaches, students FROM batch_config ORDER BY slot`;
    return res.status(200).json(rows);
  } catch (error) {
    return sendApiError(res, error);
  }
};

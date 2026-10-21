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
    await sql`SELECT 1 AS connected`;
    return res.status(200).json({ status: 'ok', database: 'connected' });
  } catch (error) {
    return sendApiError(res, error);
  }
};

import { neon } from '@neondatabase/serverless';

function getSQL() {
  return neon(process.env.DATABASE_URL);
}

/**
 * GET /api/batch-config-public
 * No auth required — returns all batch slots for the public-facing status grid.
 */
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const sql = getSQL();
    const rows = await sql`SELECT slot, coaches, students FROM batch_config ORDER BY slot`;
    return res.status(200).json(rows);
  } catch (error) {
    console.error('Public batch config error:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}

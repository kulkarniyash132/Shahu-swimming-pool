import { neon } from '@neondatabase/serverless';

function getSQL() {
  return neon(process.env.DATABASE_URL);
}

async function ensureTable(sql) {
  await sql`
    CREATE TABLE IF NOT EXISTS batch_config (
      slot TEXT PRIMARY KEY,
      coaches INTEGER NOT NULL DEFAULT 0,
      students INTEGER NOT NULL DEFAULT 0,
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;
}

export default async function handler(req, res) {
  // Auth check for all methods
  const authHeader = req.headers.authorization;
  if (authHeader !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized access.' });
  }

  try {
    const sql = getSQL();
    await ensureTable(sql);

    if (req.method === 'GET') {
      // Return all batch config rows
      const rows = await sql`SELECT slot, coaches, students FROM batch_config ORDER BY slot`;
      return res.status(200).json(rows);

    } else if (req.method === 'POST') {
      const { batches } = req.body;
      if (!Array.isArray(batches) || batches.length === 0) {
        return res.status(400).json({ error: 'batches array is required.' });
      }

      // Upsert each batch slot
      for (const b of batches) {
        const { slot, coaches, students } = b;
        if (!slot) continue;
        await sql`
          INSERT INTO batch_config (slot, coaches, students, updated_at)
          VALUES (${slot}, ${coaches || 0}, ${students || 0}, NOW())
          ON CONFLICT (slot) DO UPDATE
            SET coaches = EXCLUDED.coaches,
                students = EXCLUDED.students,
                updated_at = NOW()
        `;
      }
      return res.status(200).json({ message: 'Batch config saved successfully.' });

    } else {
      res.setHeader('Allow', 'GET, POST');
      return res.status(405).json({ error: `Method ${req.method} not allowed.` });
    }

  } catch (error) {
    console.error('Batch config error:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}

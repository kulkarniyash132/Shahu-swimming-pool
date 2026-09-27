import { neon } from '@neondatabase/serverless';

// Get a SQL query function connected to the Neon database
// The DATABASE_URL env var is automatically set when you connect 
// a Neon Postgres database to your Vercel project
function getSQL() {
  return neon(process.env.DATABASE_URL);
}

// Ensure the bookings table exists
async function ensureTable(sql) {
  await sql`
    CREATE TABLE IF NOT EXISTS bookings (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT,
      program TEXT NOT NULL,
      date TEXT NOT NULL,
      time TEXT NOT NULL,
      notes TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;
}

export default async function handler(req, res) {
  try {
    const sql = getSQL();
    await ensureTable(sql);

    if (req.method === 'POST') {
      const { name, phone, email, program, date, time, notes } = req.body;

      // Validate required fields
      if (!name || !phone || !program || !date || !time) {
        return res.status(400).json({ error: 'Please provide all required fields.' });
      }

      const result = await sql`
        INSERT INTO bookings (name, phone, email, program, date, time, notes)
        VALUES (${name}, ${phone}, ${email || ''}, ${program}, ${date}, ${time}, ${notes || ''})
        RETURNING id
      `;

      return res.status(201).json({
        message: 'Booking successfully created!',
        bookingId: result[0].id
      });

    } else if (req.method === 'GET') {
      const rows = await sql`SELECT * FROM bookings ORDER BY created_at DESC`;
      return res.status(200).json(rows);

    } else {
      res.setHeader('Allow', 'GET, POST');
      return res.status(405).json({ error: `Method ${req.method} not allowed.` });
    }

  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}

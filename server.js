const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Initialize SQLite database
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Create bookings table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT NOT NULL,
            email TEXT NOT NULL,
            program TEXT NOT NULL,
            date TEXT NOT NULL,
            time TEXT NOT NULL,
            notes TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) console.error('Error creating bookings table', err.message);
        });

        // Create batch_config table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS batch_config (
            slot TEXT PRIMARY KEY,
            coaches INTEGER NOT NULL DEFAULT 0,
            students INTEGER NOT NULL DEFAULT 0,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) console.error('Error creating batch_config table', err.message);
        });
    }
});

// POST /api/bookings - Create a new booking
app.post('/api/bookings', (req, res) => {
    const { name, phone, email, program, date, time, notes } = req.body;

    // Validate required fields
    if (!name || !phone || !program || !date || !time) {
        return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const sql = `INSERT INTO bookings (name, phone, email, program, date, time, notes) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const params = [name, phone, email, program, date, time, notes];

    db.run(sql, params, function (err) {
        if (err) {
            console.error('Error inserting booking', err.message);
            return res.status(500).json({ error: 'Failed to create booking.' });
        }
        res.status(201).json({
            message: 'Booking successfully created!',
            bookingId: this.lastID
        });
    });
});

// GET /api/bookings - Retrieve all bookings
app.get('/api/bookings', (req, res) => {
    db.all(`SELECT * FROM bookings ORDER BY created_at DESC`, [], (err, rows) => {
        if (err) {
            console.error('Error fetching bookings', err.message);
            return res.status(500).json({ error: 'Failed to fetch bookings.' });
        }
        res.json(rows);
    });
});

// GET /api/batch-config-public - Public: all slots (no auth, for status section)
app.get('/api/batch-config-public', (req, res) => {
    db.all(`SELECT slot, coaches, students FROM batch_config ORDER BY slot`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Failed to fetch batch config.' });
        res.json(rows);
    });
});

// GET /api/batch-config - Public: single slot info, or Admin: all slots
app.get('/api/batch-config', (req, res) => {
    const slot = req.query.slot;

    // Public single-slot lookup (for the booking form batch info strip)
    if (slot) {
        db.get(`SELECT slot, coaches, students FROM batch_config WHERE slot = ?`, [slot], (err, row) => {
            if (err) return res.status(500).json({ error: 'DB error.' });
            if (!row) return res.status(404).json({ error: 'Slot not configured.' });
            res.json(row);
        });
        return;
    }

    // Admin: return all rows
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== (process.env.ADMIN_PASSWORD || 'admin123')) {
        return res.status(401).json({ error: 'Unauthorized.' });
    }
    db.all(`SELECT slot, coaches, students FROM batch_config ORDER BY slot`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Failed to fetch batch config.' });
        res.json(rows);
    });
});

// POST /api/batch-config - Admin: upsert batch config
app.post('/api/batch-config', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== (process.env.ADMIN_PASSWORD || 'admin123')) {
        return res.status(401).json({ error: 'Unauthorized.' });
    }

    const { batches } = req.body;
    if (!Array.isArray(batches) || batches.length === 0) {
        return res.status(400).json({ error: 'batches array is required.' });
    }

    const stmt = db.prepare(
        `INSERT INTO batch_config (slot, coaches, students, updated_at)
         VALUES (?, ?, ?, CURRENT_TIMESTAMP)
         ON CONFLICT(slot) DO UPDATE SET
           coaches = excluded.coaches,
           students = excluded.students,
           updated_at = CURRENT_TIMESTAMP`
    );
    for (const b of batches) {
        stmt.run(b.slot, b.coaches || 0, b.students || 0);
    }
    stmt.finalize((err) => {
        if (err) return res.status(500).json({ error: 'Failed to save batch config.' });
        res.json({ message: 'Batch config saved successfully.' });
    });
});

// (Removed catch-all route because it's not needed for standard static files and causes issues in Express 5.x)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

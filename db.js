'use strict';

const { neon } = require('@neondatabase/serverless');

let cachedSql;
let schemaPromise;

function getSql() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    const error = new Error(
      'Database is not configured. Add DATABASE_URL in Vercel Project Settings > Environment Variables.'
    );
    error.statusCode = 503;
    throw error;
  }

  if (!cachedSql) cachedSql = neon(connectionString);
  return cachedSql;
}

/**
 * Create the two tables if they do not already exist. This only creates missing
 * objects; it does not delete tables or records. If an existing table has a
 * different schema, use the Vercel Function logs to identify the required
 * migration rather than deleting or recreating that table.
 */
async function getDatabase() {
  const sql = getSql();

  if (!schemaPromise) {
    schemaPromise = (async () => {
      await sql.transaction([
        sql`CREATE TABLE IF NOT EXISTS bookings (
          id BIGSERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          phone TEXT NOT NULL,
          email TEXT NOT NULL DEFAULT '',
          program TEXT NOT NULL,
          date TEXT NOT NULL,
          time TEXT NOT NULL,
          notes TEXT,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )`,
        sql`CREATE TABLE IF NOT EXISTS batch_config (
          slot TEXT PRIMARY KEY,
          coaches INTEGER NOT NULL DEFAULT 0 CHECK (coaches >= 0 AND coaches <= 50),
          students INTEGER NOT NULL DEFAULT 0 CHECK (students >= 0 AND students <= 500),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )`
      ]);
    })().catch((error) => {
      // Allow a later request to retry if the database was temporarily unavailable.
      schemaPromise = undefined;
      throw error;
    });
  }

  await schemaPromise;
  return sql;
}

function isAdminRequest(req) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return { ok: false, statusCode: 503, error: 'Admin login is not configured. Add ADMIN_PASSWORD in Vercel Environment Variables.' };
  }

  const supplied = req.headers.authorization || '';
  const password = supplied.startsWith('Bearer ') ? supplied.slice(7) : supplied;
  if (password !== expected) {
    return { ok: false, statusCode: 401, error: 'Incorrect admin password.' };
  }
  return { ok: true };
}

function sendApiError(res, error) {
  console.error('API request failed:', error && error.stack ? error.stack : error);
  const statusCode = Number.isInteger(error && error.statusCode) ? error.statusCode : 500;
  const message = statusCode === 503
    ? error.message
    : 'The request failed. Check DATABASE_URL and the Vercel Function logs.';
  return res.status(statusCode).json({ error: message });
}

module.exports = { getDatabase, isAdminRequest, sendApiError };

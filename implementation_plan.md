# Generate Backend for Booking Form

This plan outlines the steps to build a robust Node.js backend for the Chhatrapati Shahu Swimming Pool frontend. 

## User Review Required

> [!IMPORTANT]
> - **Technology Stack**: I propose using **Node.js with Express.js** for the server, as it pairs naturally with your existing JavaScript frontend. 
> - **Database**: For persistence, I propose using **SQLite**. It requires no separate installation and works great for simple booking systems.
> Let me know if you prefer a different stack (e.g., Python/Flask) or database (e.g., MongoDB, PostgreSQL)!

## Proposed Changes

### 1. Initialize Node.js Project & Dependencies
- Run `npm init -y` to create `package.json`.
- Install `express` (web framework), `cors` (Cross-Origin Resource Sharing), and `sqlite3` (database).

### 2. Backend Server (`server.js`)
#### [NEW] [server.js](file:///c:/Users/HP/.gemini/antigravity-ide/scratch/shahu-jaltaran-pool/server.js)
Create an Express server that:
- Serves your static frontend files (`index.html`, `style.css`, `script.js`, `images/`).
- Initializes an SQLite database with a `bookings` table to store reservations.
- Exposes a `POST /api/bookings` endpoint to receive form data (Name, Phone, Email, Program, Date, Time, Notes).

### 3. Frontend Integration
#### [MODIFY] [script.js](file:///c:/Users/HP/.gemini/antigravity-ide/scratch/shahu-jaltaran-pool/script.js)
Update the `submit` event listener on `booking-form` to:
- Collect the form data into a JSON object.
- Make a `fetch` API call (`POST`) to `/api/bookings`.
- Handle the response (show success message if successful, or error if failed).

## Verification Plan
1. Start the Node.js server using `node server.js`.
2. Open the app in the browser via `http://localhost:3000`.
3. Submit a booking through the form.
4. Verify the frontend displays the success animation.
5. Check the server console and SQLite database to ensure the booking was saved successfully.

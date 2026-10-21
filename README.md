# Shahu Swimming Pool — Vercel + Neon fix

This folder contains the website files and the `/api` + `/lib` folders needed for Vercel to run the backend using Neon PostgreSQL. It keeps the existing public website styling.

## What changed

- Added Vercel API functions for bookings, public batch counts, admin batch management, and a health check.
- Added `lib/db.js` to connect the API functions to Neon using `DATABASE_URL`.
- The first API request creates `bookings` and `batch_config` tables only if they are missing. It does not drop tables or delete records.
- Removed the self-referencing API rewrites from `vercel.json`.
- Removed the hard-coded `admin123` fallback from the admin page. The admin password must be set in Vercel.
- The admin page will not allow batch counts to be saved if it could not load the current saved counts.
- The public home page already contains a live batch-status section showing the coach count, student count, and capacity percentage for each time slot. It loads from `/api/batch-config-public`; the page now explains when counts have not yet been published or when the API cannot be reached.

## Before uploading: important data note

The local `database.sqlite` file is intentionally not included. Vercel should use Neon as the persistent database. Data that exists only in a local SQLite file is **not automatically copied into Neon** by this code. Keep your original files/backups until you have confirmed that any real bookings are present in Neon.

## Upload the files to GitHub

1. Download the ZIP and **extract/unzip it first** on your computer. Do not upload the ZIP file itself to the repository.
2. Open the extracted folder. You should see `index.html`, `admin.html`, `script.js`, `style.css`, `package.json`, `package-lock.json`, `vercel.json`, and the folders named `api` and `lib`.
3. Open your existing repository: `https://github.com/kulkarniyash132/Shahu-swimming-pool`.
4. Choose **Add file → Upload files**. Upload/drag the extracted files and folders so they land in the repository root (the same level as `index.html`). Do not upload an extra outer folder. If your browser's upload page will not accept folders, create each file using **Add file → Create new file** and include the paths `api/batch-config.js`, `api/batch-config-public.js`, `api/bookings.js`, `api/health.js`, and `lib/db.js` in the file name; GitHub creates the folders from those paths.
5. Commit the changes to the `main` branch. Do not delete other existing folders or image assets from your repository.

If the repository is connected to the Vercel project and `main` is its production branch, the commit should automatically start a new deployment.

## Configure Vercel (required)

1. Open the Vercel dashboard and select the website project.
2. Open **Settings → Environment Variables**.
3. Add `DATABASE_URL`. Copy the connection string from the Neon Console's connection details for the database the site should use. Use the pooled connection string if Neon offers that option. Paste the value directly; do not add quotes.
4. Add `ADMIN_PASSWORD`. Choose a long, unique password that is not `admin123`. Do not put the actual password in GitHub or in a file in this repository.
5. Select the **Production** environment (and Preview too if you use preview deployments), save the variables, and redeploy the latest deployment. Vercel environment-variable changes apply to new deployments.

The `.env.example` file contains examples only. Do not fill it with real secrets or rename it to `.env` before uploading.

## Test after deployment

1. Visit `https://YOUR-SITE-DOMAIN/api/health`. Expected response: `{"status":"ok","database":"connected"}`. This check also creates the required tables if they do not exist.
2. Visit `https://YOUR-SITE-DOMAIN/admin.html` and enter the exact `ADMIN_PASSWORD` you configured in Vercel.
3. Open **Manage Batches**, change one test count, press **Save All Batches**, then refresh the page and check whether the count remains saved.
4. Check the public website's batch status after refreshing it.
5. Test a booking only when you are ready to create a real booking record.

If `/api/health` shows an error, open Vercel → your project → **Deployments** → the latest deployment → **Functions** or **Logs** and check the API error before changing data.

## Free-plan note

This code does not require a paid API or paid database package. Keep an eye on free-tier limits. Vercel's Hobby plan is restricted to personal/non-commercial use; check Vercel's current terms if this is being used as the live website for an operating pool. Do not upgrade or enable paid usage if your budget is strictly ₹0.


## Latest visual refinements
- The pool length shown on the public homepage is now 25 m.
- Visitor-facing pool hours and batch times display in 12-hour AM/PM format; the internal API/database batch keys remain 24-hour to preserve existing records.
- The body anatomy section has a more detailed, animated visual treatment. Moving the pointer over a highlighted point updates the side information panel immediately; click/tap and keyboard focus are supported as fallbacks.
- Marathi copy has been revised for more natural phrasing across the main experience.

The visitor page uses the stated 25 m pool length and shows visible times in 12-hour AM/PM format. Batch IDs sent to the API remain in their original 24-hour format so existing Neon rows continue to match.

## Latest anatomy cleanup
- Removed the visible “INTERACTIVE” and “LIVE DETAIL” labels; hover/focus/tap details still work.
- Redrew the legs as separate, smoother shapes to better match the torso styling and proportions.
- Repositioned the knee accents and the legs/joints hover markers to line up with the updated illustration.

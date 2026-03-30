# 🔌 Data Connector: Google Sheets → Game Engine

This document defines the R&D for pulling dynamic content from Google Sheets into the game engines without a specialized backend.

## 📡 The Pipeline
1. **Source**: Google Sheet with specific column headers.
2. **Export**: Published to the web as **CSV**.
3. **Fetch**: JavaScript `fetch()` command to retrieve the CSV.
4. **Parse**: Convert CSV text to a JSON array of objects.

## 🛠️ Implementation Details (Experimental)

### CORS Workaround (Development)
Browsers block `fetch()` for `file:///` URLs. For R&D, we use:
* **Local Server**: A simple PowerShell script (`server.ps1`) to serve the repo on `http://localhost`.
* **Deployment**: In production (GitHub Pages/S3), CORS is handled by the hosting provider.

### Parsing Logic
We use a lightweight parsing function (or PapaParse if needed) to map columns:
- `question` -> display text
- `answer1..4` -> option array (shuffled)
- `correct_answer` -> validation key
- `topic_id` -> metadata for tracking

## ⚠️ Known Constraints
* **Availability**: Dependent on Google Sheets uptime.
* **Format**: Any change in column order or header names in the Sheet will break the parser.
* **Latency**: Fetching large CSVs (>2000 rows) might cause initial load delay.

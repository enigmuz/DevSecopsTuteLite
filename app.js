const express = require('express');
const app = express();
const path = require('path');

// VULNERABILITY: Hardcoded Secret (SAST will flag this)
const DATABASE_PASSWORD = "Admin_Password_Don_Not_Share_123";

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// VULNERABILITY: Insecure API endpoint (DAST will flag this)
app.get('/api/debug', (req, res) => {
    res.json({ status: "Insecure Mode", version: "1.0.0", env: process.env });
});

app.listen(3000, () => console.log('Dashboard Live on http://localhost:3000'));
const express = require('express');
const cors = require('cors'); // Import cors
const app = express();

// Use cors middleware
app.use(cors());

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2124',
    database: 'entries'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.get('/lookup', (req, res) => {
    const word = req.query.word;

    const query = 'SELECT * FROM entries WHERE word = ?';
    db.query(query, [word], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Setup Multer for CV uploads
const uploadDir = path.resolve(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
        // Always save as cv.pdf to overwrite previous versions easily
        cb(null, 'cv.pdf')
    }
})

const upload = multer({ storage: storage })

// Database Setup
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
    }
});

// Routes
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const query = `INSERT INTO messages (name, email, message) VALUES (?, ?, ?)`;
    db.run(query, [name, email, message], function (err) {
        if (err) {
            console.error('Error inserting message:', err.message);
            return res.status(500).json({ error: 'Failed to store message.' });
        }
        res.status(201).json({ id: this.lastID, message: 'Message sent successfully!' });
    });
});

app.get('/api/messages', (req, res) => {
    db.all('SELECT * FROM messages ORDER BY timestamp DESC', [], (err, rows) => {
        if (err) {
            console.error('Error fetching messages:', err.message);
            return res.status(500).json({ error: 'Failed to fetch messages.' });
        }
        res.json(rows);
    });
});

app.delete('/api/messages/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM messages WHERE id = ?', id, function (err) {
        if (err) {
            console.error('Error deleting message:', err.message);
            return res.status(500).json({ error: 'Failed to delete message.' });
        }
        res.json({ message: 'Message deleted successfully.' });
    });
});

// CV Routes
app.post('/api/cv', upload.single('cv'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded.' });
    }
    res.json({ message: 'CV uploaded successfully!' });
});

app.get('/api/cv', (req, res) => {
    const cvPath = path.resolve(__dirname, 'uploads', 'cv.pdf');
    if (fs.existsSync(cvPath)) {
        res.download(cvPath); // Set disposition and send it.
    } else {
        res.status(404).json({ error: 'CV not found.' });
    }
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;

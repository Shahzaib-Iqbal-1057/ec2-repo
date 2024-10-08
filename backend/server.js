const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for messages
let messages = [];

// API Routes

// Fetch all messages
app.get('/api/messages', (req, res) => {
    res.json(messages);
});

// Post a new message
app.post('/api/messages', (req, res) => {
    const newMessage = req.body.text;
    if (newMessage) {
        messages.push({ text: newMessage });
        res.status(201).json({ text: newMessage });
    } else {
        res.status(400).json({ message: 'Message text is required' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

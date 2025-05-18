const express = require('express');
const connectDB = require('./config/db');
const { PORT } = require('./config/env');
const noteRouter = require('./routes/note.route');
const rateLimiter = require('./middleware/rateLimiter');
const cors = require('cors');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// CORS middleware
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true,
}));

// Test route
app.get('/', (req, res) => {
    res.send('Hello World!');
});


// Rate limiting middleware
app.use(rateLimiter);

app.use('/api/notes', noteRouter);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on URL: http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('Error starting server:', error);
    process.exit(1);
});
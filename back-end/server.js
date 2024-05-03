const mysql = require('mysql2');
const userRoutes = require('./routes/user');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
const PORT = 8081;


const corsOptions = {
    origin: 'http://localhost:3000', // Change this to your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true,
};

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors(corsOptions));
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Node.js backend!');
});

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'nasa-api'
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to MySQL database');
        connection.release();
    }
});


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "front-end", "build"))); app.get("*", (req, res) => {
    });
    res.sendFile(path.join(__dirname, "front-end", "build", "index.html"));
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8081;


const corsOptions = {
    origin: 'https://nasa-api-app-it21096570.netlify.app', // Change this to your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors(corsOptions));
app.use('/user', userRoutes);

const mongoURI = 'mongodb+srv://thanuja:fU9UNzunKlAfADxE@cluster0.0ckqiu2.mongodb.net/nasa-api';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected…'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));


app.get('/', (req, res) => {
    res.send('Welcome to the Node.js backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

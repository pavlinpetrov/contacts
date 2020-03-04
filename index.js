const express = require('express');
const mongoose = require('mongoose');
const { database } = require('./config');
const app = express();

// Database
mongoose.connect(`${database.host}${database.name}`, database.options)
    .then(() => console.log(`Connected to database`))
    .catch(err => console.error(err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Controllers
const ContactController = require('./controllers/ContactController');

// Routes

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
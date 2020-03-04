const express = require('express');
const mongoose = require('mongoose');
const { database, corsOptions } = require('./config');
const cors = require('cors')
const app = express();

// Database
mongoose.connect(`${database.host}${database.name}`, database.options)
.then(() => console.log(`Connected to database`))
.catch(err => console.error(err));

// Middleware
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api/contacts', require('./routes/api/contacts'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
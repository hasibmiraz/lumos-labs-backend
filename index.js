// Dependencies
const express = require('express');
require('dotenv').config();
require('./db');

const PORT = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(express.json());

app.listen(PORT, console.log(`Listening to port ${PORT}`));

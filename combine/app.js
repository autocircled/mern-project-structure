const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');

// Secirity Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');


// Database
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Security Middleware Initialization
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());


// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rate Limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 3000
});

app.use(limiter);


// Routes
app.use('/api/v1', router);

module.exports = app
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const errorMiddleware = require('./middlewares/errors');
const events = require('./routes/events');

dotenv.config({ path: 'backend/config/config.env' });

const app = express();
app.use(bodyParser.json({ limit: '5mb' }));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1', events);
app.use(errorMiddleware);

module.exports = app;

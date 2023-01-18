const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const errorMiddleware = require('./middlewares/errors');
const events = require('./routes/events');

dotenv.config({ path: 'config/config.env' });

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(express.json());

// route for integration test
app.get('/', (req, res) => {
	res.status(200).json('hello from brainhub event app');
});
app.use('/api/v1', events);
app.use(errorMiddleware);

module.exports = app;

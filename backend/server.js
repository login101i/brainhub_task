const app = require('./app');
const dotenv = require('dotenv');
var colors = require('colors');

const connectDataBase = require('./config/connectDataBase');
connectDataBase();

const server = app.listen(process.env.PORT || 4001, () => {
	console.log(`Serwer works on port ${process.env.PORT} in process ${process.env.NODE_ENV}`.brightMagenta);
});

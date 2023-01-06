const app = require('./app');
const dotenv = require('dotenv');
var colors = require('colors');

const connectDataBase = require('./config/connectDataBase');
connectDataBase();

const server = app.listen(process.env.PORT || 4001, () => {
	console.log(`Serwer działa na porcie ${process.env.PORT} w procesie ${process.env.NODE_ENV}`.brightMagenta);
});

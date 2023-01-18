const app = require('./app');
var colors = require('colors');

const connectDataBase = require('./config/connectDataBase');
connectDataBase();

const server = app.listen(process.env.PORT || 4004, () => {
	console.log(`Server works on port ${process.env.PORT} in process ${process.env.NODE_ENV}`.brightMagenta);
});

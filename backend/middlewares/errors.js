const ErrorHandler = require('../utils/errorHandler');

module.exports = (error, req, res, next) => {
	error.statusCode = error.statusCode || 500;

	if (process.env.NODE_ENV === 'DEVELOPMENT') {
		if (error.name === 'ValidationError') {
			const message = Object.values(error.errors).map(value => value.message);
			error = new ErrorHandler(message, 400);
		}

		if (error.code === 11000) {
			const message = `Duplicated ${Object.keys(error.keyValue)} in event data base. Please type in another ${Object.keys(error.keyValue)}`;
			error = new ErrorHandler(message, 400);
		}
		if (error.code === 'ECONNREFUSED') {
			const message = `Duplicated ${Object.keys(error.keyValue)} in event data base. Please type in another ${Object.keys(error.keyValue)}`;
			error = new ErrorHandler(message, 400);
		}

		res.status(error.statusCode).json({
			data: error.message,
		});
	}
};

const Event = require('../models/Event');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');

exports.getEvents = catchAsyncErrors(async (req, res, next) => {
	const eventsCount = await Event.countDocuments();
	const eventsList = await Event.find();

	res.status(200).json({
		success: true,
		eventsCount,
		eventsList,
	});
});

exports.createEvent = catchAsyncErrors(async (req, res, next) => {
	const newEvent = await Event.create(req.body);
	if (!newEvent) {
		return next(new ErrorHandler('Nie stworzono eventu', 404));
	}
	res.status(201).json({
		success: true,
		newEvent,
	});
});

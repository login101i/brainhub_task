const Event = require('../models/Event');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');
const getCurrentDate = require('../utils/getCurrentDate');

exports.getEvents = catchAsyncErrors(async (req, res, next) => {
	try {
		const eventsList = await Event.find({});
		if (eventsList && eventsList.length > 0) {
			res.status(200).json({ eventsList });
		} else {
			res.status(404).json();
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

// module created to test in unit test
exports.getEventById = catchAsyncErrors(async (req, res, next) => {
	try {
		const event = await Event.findById(req.params.event_id);
		if (event) {
			res.status(200).json(event);
		} else {
			res.status(404).send();
		}
	} catch (err) {
		res.status(500).send(err);
	}
});

exports.createEvent = catchAsyncErrors(async (req, res, next) => {
	const { firstName, lastName, email, eventDate } = req.body;
	if (!firstName || !lastName || !email || !eventDate) {
		return res.status(404).json('Error, missing input value.');
	}
	if (new Date(eventDate) < new Date(getCurrentDate())) {
		return res.status(400).json('Do you see that read color above?');
	}
	const emailExist = await Event.findOne({ email: req.body.email });
	if (emailExist) {
		return res.status(400).json('Email you provided for event is already taken');
	}
	const newEvent = await Event.create(req.body);

	if (!newEvent) {
		return res.status(400).json('Event was not created');
	}

	res.status(201).json({
		newEvent,
	});
});

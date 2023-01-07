const mongoose = require('mongoose');
const validator = require('validator');
const eventModelStrings = require('./EventStrings');

const eventSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, eventModelStrings.firstName.requiredText],
			unique: false,
			maxlength: [100, eventModelStrings.firstName.maxLengthText],
			minlength: [2, eventModelStrings.firstName.minLengthText],
		},
		lastName: {
			type: String,
			required: [true, eventModelStrings.lastName.requiredText],
			unique: false,
			maxlength: [100, eventModelStrings.lastName.maxLengthText],
			minlength: [2, eventModelStrings.lastName.minLengthText],
		},
		email: {
			type: String,
			required: [true, eventModelStrings.email.requiredText],
			unique: true,
			validate: [validator.isEmail, eventModelStrings.email.validateText],
		},

		eventDate: {
			type: Date,
			required: [true, eventModelStrings.eventDate.requiredText],
			validate: [validator.isDate, eventModelStrings.eventDate.validateText],
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model('Event', eventSchema);

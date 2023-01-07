const mongoose = require('mongoose');
const validator = require('validator');
const eventModelStrings = require('./EventStrings');

const eventSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, eventModelStrings.firstName.maxLengthText],
			unique: false,
			maxlength: [100, eventModelStrings.firstName.maxLengthText],
		},
		lastName: {
			type: String,
			required: [true, eventModelStrings.lastName.requiredText],
			unique: false,
			maxlength: [100, eventModelStrings.lastName.maxLengthText],
		},
		email: {
			type: String,
			required: [true, eventModelStrings.email.requiredText],
			unique: true,
			validate: [validator.isEmail, eventModelStrings.email.validateText],
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model('Event', eventSchema);

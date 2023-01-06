const mongoose = require('mongoose');
const validator = require('validator');

const eventSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, 'Proszę wprowadź nazwę eventu'],
			unique: true,
			maxlength: [100, 'Proszę wprowadź max 100 znaków w tytule eventu.'],
		},
		lastName: {
			type: String,
			required: [true, 'Proszę wprowadź nazwę eventu'],
			unique: true,
			maxlength: [100, 'Proszę wprowadź max 100 znaków w tytule eventu.'],
		},
		email: {
			type: String,
			required: [true, 'Proszę wpisać adres e-mail'],
			unique: true,
			validate: [validator.isEmail, 'Proszę podać poprawny adres email'],
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true },
);


module.exports = mongoose.model('Event', eventSchema);

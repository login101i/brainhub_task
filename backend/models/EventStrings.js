const eventModelStrings = {
	firstName: {
		requiredText: 'Please enter firstName of event.',
		maxLengthText: 'Please enter max 100 characters in event firstName.',
		minLengthText: 'Please enter min 2 characters in event firstName.',
	},
	lastName: {
		requiredText: 'Please enter lastName of event.',
		maxLengthText: 'Please enter max 100 characters in event lastName.',
		minLengthText: 'Please enter min 2 characters in event lastName.',
	},
	email: {
		requiredText: 'Please enter your email.',
		validateText: 'Please enter correct email format.',
	},
	eventDate: {
		requiredText: 'Please enter date of the event.',
		validateText: 'Please pick today or day after tomorrow.',
	},
};

module.exports = eventModelStrings;

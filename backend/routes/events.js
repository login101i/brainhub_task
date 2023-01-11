const router = require('express').Router();
const { getEvents, createEvent } = require('../controllers/eventsControllers');

//route for integration test
router.get('/', (req, res) => {
	res.json({
		status: 'API is working',
		message: 'Event api router, here we define all functions',
	});
});

router.get('/events', getEvents);
router.post('/event/new', createEvent);

module.exports = router;

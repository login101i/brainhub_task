const router = require('express').Router();
const { getEvents, createEvent } = require('../controllers/eventsController');

router.get('/events', getEvents);
router.post('/event/new', createEvent);

module.exports = router;

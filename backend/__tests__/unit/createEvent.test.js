const eventsControllers = require('../../controllers/eventsControllers');
const eventModel = require('../../models/Event');
const httpMock = require('node-mocks-http');
const eventPayload = require('../mockData/eventPayload.json');

eventModel.create = jest.fn();
eventModel.findOne = jest.fn();
let req, res, next;

beforeEach(() => {
	eventModel.create.mockClear();
	eventModel.findOne.mockClear();

	req = httpMock.createRequest();
	res = httpMock.createResponse();
	next = null;
	req.body = { ...eventPayload };
});
describe('controller.createEmployee', () => {
	test('createEmployee function is defined', () => {
		expect(typeof eventsControllers.createEvent).toBe('function');
	});

	test('create a valid employee', async () => {
		eventModel.create.mockReturnValue(eventPayload);
		eventModel.findOne.mockReturnValue(false);
		await eventsControllers.createEvent(req, res, next);
		expect(res.statusCode).toBe(201);
		expect(res._getJSONData()).toStrictEqual({ newEvent: eventPayload });
		expect(eventModel.create).toBeCalledWith(eventPayload);
	});

	test('do not create event which email already exists', async () => {
		eventModel.create.mockReturnValue(eventPayload);
		eventModel.findOne.mockReturnValue(true);
		await eventsControllers.createEvent(req, res, next);
		expect(res.statusCode).toBe(400);
		expect(res._getJSONData()).toStrictEqual('Email you provided for event is already taken');
	});

	test('do not create an event', async () => {
		eventModel.create.mockReturnValue(null);
		eventModel.findOne.mockReturnValue(false);
		await eventsControllers.createEvent(req, res, next);
		expect(res.statusCode).toBe(400);
		expect(res._getJSONData()).toStrictEqual('Event was not created');
	});
});

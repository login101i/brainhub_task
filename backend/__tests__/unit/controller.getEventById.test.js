const eventsControllers = require('../../controllers/eventsControllers');
const eventModel = require('../../models/Event');
const httpMock = require('node-mocks-http');
const mockEventList = require('../mockData/eventsList.json');

eventModel.findById = jest.fn();
let req, res, next;
req = httpMock.createRequest();
res = httpMock.createResponse();
next = null;

beforeEach(() => {
	req = httpMock.createRequest();
	res = httpMock.createResponse();
	next = null;
});

describe('controller getEventById', () => {
	jest.setTimeout(20000);

	test('getEvent function is defined', () => {
		expect(eventsControllers.getEvents).toBeDefined();
		expect(typeof eventsControllers.getEvents).toBe('function');
	});

	test('getEventById function is defined', () => {
		expect(eventsControllers.getEventById).toBeDefined();
		expect(typeof eventsControllers.getEventById).toBe('function');
	});

	test('return an event by id', async () => {
		req.params.event_id = mockEventList[0]._id;
		eventModel.findById.mockReturnValue(mockEventList[0]);
		await eventsControllers.getEventById(req, res, next);
		expect(eventModel.findById).toHaveBeenCalledWith(req.params.event_id);
		expect(res.statusCode).toBe(200);
		expect(res._getJSONData()).toStrictEqual(mockEventList[0]);
	});

	test('return 404 when id is not found', async () => {
		eventModel.findById.mockReturnValue(null);
		await eventsControllers.getEventById(req, res, next);
		expect(res.statusCode).toBe(404);
	});

	test('return 500 when eventModel.findById throws exception', async () => {
		req.params.employee_id = mockEventList[0]._id;
		eventModel.findById.mockRejectedValue('fake exception from findbyid');
		await eventsControllers.getEventById(req, res, next);
		expect(eventModel.findById).toHaveBeenCalledWith(req.params.employee_id);
		expect(res.statusCode).toBe(500);
		expect(res._getData()).toStrictEqual('fake exception from findbyid');
	});
});

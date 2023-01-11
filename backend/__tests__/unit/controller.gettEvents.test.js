const eventsControllers = require('../../controllers/eventsControllers');
const eventModel = require('../../models/Event');
const httpMock = require('node-mocks-http');
const mockeEventList = require('../mockData/eventsList.json');

eventModel.find = jest.fn();
let req, res, next;

beforeEach(() => {
	req = httpMock.createRequest();
	res = httpMock.createResponse();
	next = null;
});

afterEach(() => {
	eventModel.find.mockClear();
});

describe('controller getEvents', () => {
	jest.setTimeout(200000);

	test('geEvents function is defined', () => {
		expect(typeof eventsControllers.getEvents).toBe('function');
	});

	test('return all events', async () => {
		eventModel.find.mockReturnValue(mockeEventList);
		await eventsControllers.getEvents(req, res, next);
		expect(res.statusCode).toEqual(200);
	});

	test('return 404 when db is empty', async () => {
		eventModel.find.mockReturnValue(null);
		await eventsControllers.getEvents(req, res, next);
		expect(res.statusCode).toEqual(404);
		expect(res._isEndCalled()).toBeTruthy();
	});

	test('return 500 when findById throw an exception ', async () => {
		eventModel.find.mockRejectedValue('error');
		await eventsControllers.getEvents(req, res, next);
		expect(res.statusCode).toEqual(500);
		expect(res._getJSONData()).toStrictEqual('error');
	});
});

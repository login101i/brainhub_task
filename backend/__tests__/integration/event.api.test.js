const request = require('supertest');
const app = require('../../app');
const endpointUrl = '/api/v1';

describe('Validate ' + endpointUrl, () => {
	test('Get / ', async () => {
		const response = await request(app).get('/');
		expect(response.body).toEqual('hello from brainhub event app');
		expect(response.statusCode).toBe(200);
	});

	test('Get ' + endpointUrl, async () => {
		const response = await request(app).get(endpointUrl);
		expect(response.body).toStrictEqual({
			status: 'API is working',
			message: 'Event api router, here we define all functions',
		});
		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty('status', 'API is working');
		expect(response.body).toMatchObject({
			status: 'API is working',
			message: 'Event api router, here we define all functions',
		});
		expect(JSON.stringify(response.body)).toEqual(
			JSON.stringify({
				status: 'API is working',
				message: 'Event api router, here we define all functions',
			}),
		);
	});
});

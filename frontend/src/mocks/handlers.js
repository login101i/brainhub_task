/* eslint-disable no-undef */
import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3030/api/v1/events', (req, res, cts) => {
    return res(
      ctx.json([
        {
          eventsList: [
            { firstName: 'TestName', lastName: 'TestLastName', email: 'testemail@gmail.com' },
            { firstName: 'TestName2', lastName: 'TestLastName2', email: 'testemail2@gmail.com' },
            { firstName: 'TestName3', lastName: 'TestLastName3', email: 'testemail3@gmail.com' }
          ]
        }
      ])
    );
  }),
  rest.post('http://localhost:3030/api/v1/event/new', (req, res, cts) => {
    return res(ctx.json([{ firstName: 'TestName', lastName: 'TestLastName', email: 'testemail@gmail.com' }]));
  })
];

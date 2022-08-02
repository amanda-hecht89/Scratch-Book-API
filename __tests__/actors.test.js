const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('book routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('/books should return a list of books', async() => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(8);
     
  });
});
afterAll(() => {
  pool.end();
});



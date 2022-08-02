const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('actor routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('/actors should return a list of actors', async() => {
    const res = await request(app).get('/actors');
    expect(res.body.length).toEqual(3);
     
  });
});
afterAll(() => {
  pool.end();
});



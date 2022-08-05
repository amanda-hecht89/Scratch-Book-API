const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('author routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it.skip('/authors should return a list of authors', async() => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(2);
     
  });
  it('authors/:id should return authors details', async () => {
    const res = await request(app).get('/authors/1');
    expect(res.body).toEqual({
      id: '1',
      name: 'Stephen King',
      dob: 1947,
      hometown: 'Portland MN'

    });
  });
});
afterAll(() => {
  pool.end();
});

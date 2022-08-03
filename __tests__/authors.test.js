const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('book routes', () => {
  beforeEach(() => {
    return setup(pool);
  });


  it('/authors should return a list of authors', async() => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(8);
     
  });
  it('authors/:id should return data from single author', async () => {
    const res = await request(app).get('/author/1');
    expect(res.body).toHaveProperty('id', '1');
    expect(res.body).toHaveProperty('name', 'Stephen King');
    expect(res.body.authors[0]).toHaveProperty('dob');
    expect(res.body.authors[0]).toHaveProperty('hometown');
  });
});
afterAll(() => {
  pool.end();
});
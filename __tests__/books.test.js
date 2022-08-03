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
  it('books/:id should return data from single book', async () => {
    const res = await request(app).get('/books/1');
    console.log(res.body, 'yoooooooo');
    expect(res.body).toHaveProperty('id', '1');
    expect(res.body).toHaveProperty('title', 'IT');
    expect(res.body).toHaveProperty('released', 2011);
    expect(res.body.authors[0]).toHaveProperty('dob');
    expect(res.body.authors[0]).toHaveProperty('hometown');
    expect(res.body.authors[0]).toHaveProperty('id');
    expect(res.body.authors[0]).toHaveProperty('name');
  });
});
afterAll(() => {
  pool.end();
});



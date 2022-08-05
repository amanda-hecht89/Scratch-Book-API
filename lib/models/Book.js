const pool = require('../utils/pool');

class Book {
  id;
  title;
  released;
  authors;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
    this.authors = row.authors;
  }

  static async getAll() {
    const { rows } = await pool.query('select * from books;');
    return rows.map(row => new Book(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from books WHERE id = $1
        `,
      [id]
    ); if (rows.length === 0) {
      return null;
    } return new Book(rows[0]);
  }

  async getAuthorBookId() {
    const { rows } = await pool.query(
      `
      select authors.* from books
      left join book_author on books.id = book_author.book_id
      left join authors on book_author.author_id = authors.id
      where books.id = $1
        `,
      [this.id]
    ); 
    this.authors = rows;
    return this;
  }

  static async insert({ title, released }) {
    const { rows } = await pool.query(
      `
        INSERT INTO books (title, released)
        VALUES ($1, $2)
        RETURNING *
        `,
      [title, released]
    ); return new Book(rows[0]);
  }
}
module.exports = Book;

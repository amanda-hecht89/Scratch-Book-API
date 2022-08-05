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
    this.authors = row.authors || [];
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

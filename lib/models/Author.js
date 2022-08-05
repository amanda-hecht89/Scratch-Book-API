const pool = require('../utils/pool');

class Author {
  id;
  name;
  dob;
  hometown;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.dob = row.dob;
    this.hometown = row.hometown;
  }

  static async getAll() {
    const { rows } = await pool.query('select * from authors;');
    return rows.map(row => new Author(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * from authors WHERE id = $1
        `,
      [id]
    ); if (rows.length === 0) {
      return null;
    } return new Author(rows[0]);
  }

  static async insert({ name, dob, hometown }) {
    const { rows } = await pool.query(
      `
        INSERT INTO authors (name, dob, hometown)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
      [name, dob, hometown]
    ); return new Author(rows[0]);
  }
}
module.exports = Author;

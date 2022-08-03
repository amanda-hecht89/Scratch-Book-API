const pool = require('../utils/pool');

class Book {
  id;
  name;
  released;
  authors;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.released = row.released;
    this.authors = row.authors || [];
  }

  static async getAll() {
    const { rows } = await pool.query('select * from books;');
    return rows.map(row => new Book(row));
  }

  static async getBookById(id) {
    const { rows } = await pool.query(`select books.*,
    coalesce(
json_agg(to_jsonb(authors)) 
filter (where authors.id is not null), '[]') as authors from books 
left join books_authors on books_authors.books_id = books.id
left join quthors on books_authors.authors_id = authors.id
where books.id=$1
group by books.id;`, [id]);
console.log(rows[0]);
    return new Book(rows[0]);
  }
}
module.exports = Book;

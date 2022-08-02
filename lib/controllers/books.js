const { Router } = require('express');
const Book = require('../models?books');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const book = await Book.getBookById(req);
    res.json(book);
  })
  .get('/', async (req, res) => {
    const books = await Book.getAll();
    res.json(books);
  });

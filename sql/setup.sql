-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists books;
DROP table if exists authors;
DROP table if exists actors_movies;

CREATE table books (
    id BIGINT generated always as identity primary key
    name VARCHAR NOT NULL,
    released INT,
    authors VARCHAR NOT NULL,

);

INSERT into books (name, releasedm) values
('Phantoms', 2021, 'Dean Koontz'),
('IT', 2011, 'Steven King'),
('Shattered', 1985, 'Dean Koontz'),
('Hideaway', 2005, 'Dean Koontz'),
('Geralds Game', 2016, 'Steven King'),
('Carrie', 2008, 'Steven King'),
('Running Man', 2007, 'Steven King'),
('Pet Semaraty', 2002, 'Steven King'),

-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists books;


CREATE table books (
    id BIGINT generated always as identity primary key,
    name VARCHAR NOT NULL,
    released INT

);

INSERT into books (name, released) values
('IT', 2011),
('Phantoms', 2021),
('Shattered', 1985),
('Hideaway', 2005),
('Geralds Game', 2016),
('Carrie', 2008),
('Running Man', 2007),
('Pet Semaraty', 2002);

-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists books;
DROP table if exists books_authors


CREATE table books (
    id BIGINT generated always as identity primary key,
    name VARCHAR NOT NULL,
    released INT

);

CREATE table book_author (
    id BIGINT generated always as identity primary key,
    book_id int,
    author_id int,
    foreign key {book_id} references books(id),
    foreign key {author_id} references author(id),
)

CREATE table authors (
    id BIGINT generated always as identity primary key,
    name VARCHAR
    dob int,
    hometown VARCHAR
)

INSERT into books (name, released) values
('IT', 2011),
('Phantoms', 2021),
('Shattered', 1985),
('Hideaway', 2005),
('Geralds Game', 2016),
('Carrie', 2008),
('Running Man', 2007),
('Pet Semaraty', 2002);

INSERT into book_author (book_id, author_id) values 
('1', '1')
('2', '2')
('3', '2')
('4', '2')
('5', '1')
('6', '1')
('7', '1')
('8', '1')

INSERT into authors (name, dob, hometown) values
('Stephen King', 1947, 'Portland MN')
('Dean Koontz', 1945, 'Everett PA')

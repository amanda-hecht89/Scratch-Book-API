-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists movies;
DROP table if exists actors;
DROP table if exists actors_movies;

CREATE table movies (
    id BIGINT generated always as identity primary key
    name VARCHAR NOT NULL,
    released INT,
    genre VARCHAR NOT NULL,
    animated BOOLEAN,
);

INSERT into movies (name, released, genre, animated) values
('Nightmare Before Christmas', 1991, 'children', true),
('Mars Attacks', 1996, 'sy-fy', false),
('Big Fish', 2003, 'fantasy', false),
('Corpse Bride', 2005, 'children', true),
('Sweeny Todd', 2007, 'musical', false),
('Miss P. Home for Peculiar Children', 2016, 'fantasy', false),
('Edward Scissorhands', 1990, 'thriller', true),
('Charlie and the Chocolate Factory', 2005, 'fantasy', false),
('Dumbo', 2019, 'children', false),

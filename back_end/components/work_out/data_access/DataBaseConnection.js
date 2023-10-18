const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Thai21200126.',
  port: 5432,
});


module.exports = pool;





// table
// user_id varchar(80) 
// body_part varchar(80) 
// exercise varchar(80) 
// set int 
// repetition int
// date date

// CREATE TABLE weather (
//     city varchar(80),
//     temp_lo int, -- low temperature
//     temp_hi int, -- high temperature
//     prcp real, -- precipitation
//     date date
//    );


// CREATE TABLE gym (
//     user_id varchar(80),
//     body_part varchar(80),
//     exercise varchar(80),
//     set int,
//     repetition int,
//     date date
// );

// INSERT INTO gym(user_id, body_part, exercise, set, repetition, date)
// VALUES ('21', 'chest', 'push up', 4, 8, '2023-10-11');

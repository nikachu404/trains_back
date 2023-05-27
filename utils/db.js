import mysql12 from 'mysql2';

export const connection = mysql12.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_BDNAME,
});

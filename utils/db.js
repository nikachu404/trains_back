import mysql12 from 'mysql2';

export const pool = mysql12.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_BDNAME,
});

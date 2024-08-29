//db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool1 = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Visitor",
  password: "#POSTGRESQL*",
  port: 5432,
});

pool1.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Database connected');
});

module.exports = pool1;



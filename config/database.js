const mysql = require('mysql');
const mongoose = require('mongoose');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'refinex'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

mongoose.connect(`mongodb://${process.env.DB_HOST}/refinex`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.error(err));

module.exports = db;
const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'password',
  database: 'testdb'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

app.get('/', (req, res) => {
  res.send('Hello from Backend');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

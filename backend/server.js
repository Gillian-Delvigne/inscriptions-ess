const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const data = require('./data');

const connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'dg420313',
    password: '******************',
    database: 'inscriptions_ess'
});

connection.connect();

app.listen(8000, () => {
    console.log('Server started!')
})

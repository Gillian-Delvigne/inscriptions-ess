const express = require('express')
const app = express()
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'dg420313',
    password: '%Iamthewalrus151017-',
    database: 'inscriptions_ess'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});


app.listen(8000, () => {
    console.log('Server started!')
})
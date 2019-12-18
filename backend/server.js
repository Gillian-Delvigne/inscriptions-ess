const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');

const connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'dg420313',
    password: '%Iamthewalrus151017-',
    database: 'inscriptions_ess'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(events(connection));

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

app.listen(8080, () => {
    console.log('Server started!')
})
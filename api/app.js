const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes'));

app.use((_, res) => res.status(404).send({ message: 'Not found.' }));

module.exports = app;

const response = require('./helpers/response')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(response)

app.use('/', require('./routes'))
app.use((_, res) => res.nok(404, 'Not found.'))

module.exports = app

const response = require('./helpers/response')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(response)

app.use('/', require('./routes'))

app.use((_, res) => res.status(404).json({
  status: 'error',
  message: 'Path not found.',
  data: null
}))

module.exports = app

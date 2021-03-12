const mongoose = require('mongoose')
const { Schema } = mongoose
const { DB_URL: connectionString } = process.env

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = {
  mongoose,
  Schema
}

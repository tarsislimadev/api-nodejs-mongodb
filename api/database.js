const mongoose = require('mongoose')
const { Schema } = mongoose
const { DB_URL: connectionString } = process.env

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000,
  keepAlive: 1
})

module.exports = {
  mongoose,
  Schema
}

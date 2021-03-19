const { mongoose, Schema } = require('../../database')

const DEFAULT_TIME_SESSION = 1000 * 60 * 60

const LoginSessionSchema = new Schema({
  key: {
    type: String,
    default: () => Number(Date.now()).toString(16)
  },
  userId: {
    type: String,
    required: true
  },
  permissions: {
    type: [String],
    default: () => []
  },
  created: {
    type: Date,
    default: () => Date.now()
  },
  deleted: {
    type: Date,
    default: () => Date.now() + DEFAULT_TIME_SESSION
  }
})

const LoginSessionModel = mongoose.model('LoginSession', LoginSessionSchema)

module.exports = {
  LoginSessionSchema,
  LoginSessionModel
}

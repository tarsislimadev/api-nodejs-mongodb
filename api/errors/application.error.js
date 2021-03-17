const { HttpError } = require('./http.error')

class ApplicationError extends HttpError {
  constructor (message, status = 500) { super(message, status) }
}

module.exports = {
  ApplicationError
}

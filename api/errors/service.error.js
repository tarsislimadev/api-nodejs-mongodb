const { ApplicationError } = require('./application.error')

class ServiceError extends ApplicationError {
  constructor (message, status = 400) { super(message, status) }
}

class InvalidPasswordError extends ServiceError {
  constructor () { super('Invalid password.') }
}

class CanNotEditUsersError extends ServiceError {
  constructor () { super('Can not edit users.', 403) }
}

module.exports = {
  ServiceError,
  InvalidPasswordError,
  CanNotEditUsersError
}

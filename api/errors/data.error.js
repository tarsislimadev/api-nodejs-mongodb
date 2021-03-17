const { ApplicationError } = require('./application.error')

class DataError extends ApplicationError {
  constructor (message, status = 400) { super(message, status) }
}

class UserNotFoundError extends DataError {
  constructor () { super('User not found.', 404) }
}

class UserExistsError extends DataError {
  constructor () { super('User exists.') }
}

class UserNotUpdatedError extends DataError {
  constructor () { super('User was not updated.') }
}

class UserNotDeletedError extends DataError {
  constructor () { super('User was not deleted.') }
}

class SessionNotFoundError extends DataError {
  constructor () { super('Invalid session.', 401) }
}

class PermissionNotFoundError extends DataError {
  constructor () { super('Permission not found.', 404) }
}

module.exports = {
  DataError,
  UserNotFoundError,
  UserExistsError,
  UserNotUpdatedError,
  UserNotDeletedError,
  SessionNotFoundError,
  PermissionNotFoundError
}

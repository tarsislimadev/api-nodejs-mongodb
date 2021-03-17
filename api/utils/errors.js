
class HttpError extends Error {
  constructor (status, message) {
    super(message)

    this.status = status
  }
}

class ApplicationError extends HttpError {
  constructor (message) {
    super(500, message)
  }
}

class DataError extends ApplicationError {
  static USER_NOT_FOUND () { return { message: 'User not found.' } }
  static USER_EXISTS () { return { message: 'User exists.' } }
  static USER_NOT_UPDATED () { return { message: 'User was not updated.' } }
  static USER_NOT_DELETED () { return { message: 'User was not deleted.' } }
  static SESSION_NOT_FOUND () { return { message: 'Invalid session.' } }
  static PERMISSION_NOT_FOUND () { return { message: 'Permission not found.' } }

  constructor ({ message = 'Data Layer Error.' }) {
    super(message)
  }
}

class ServiceError extends ApplicationError {
  static INVALID_PASSWORD () { return { message: 'Invalid password.' } }
  static CAN_NOT_EDIT_USERS () { return { message: 'Can not edit users.' } }

  constructor ({ message = 'Service Layer Error.' }) {
    super(message)
  }
}

class ApiError extends ApplicationError {
  constructor ({ status = 500, message = 'Route Error.' }) {
    super(message)

    this.status = status
  }
}

class PermissionError extends ApplicationError {
  constructor ({ name }) {
    super(`Permission error: ${name}`)

    this.status = 403
  }
}

module.exports = {
  HttpError,
  ApplicationError,
  DataError,
  ServiceError,
  PermissionError,
  ApiError
}

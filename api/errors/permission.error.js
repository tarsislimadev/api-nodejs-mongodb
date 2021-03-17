const { ApplicationError } = require('./application.error')
const { findPermission } = require('../helpers/constants')

class PermissionError extends ApplicationError {
  constructor (permission) {
    const { name } = findPermission(permission)
    super(`Permission error: ${name}`, 403)
  }
}

module.exports = {
  PermissionError
}

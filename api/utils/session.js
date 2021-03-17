const { PermissionError } = require('../utils/errors')
const { findPermission } = require('../helpers/constants')
const SessionData = require('../app/data/session.data')

const validate = async (session, permission) => {
  const { permissions: sessionPermissions } = await SessionData.getSession(session)
  const sessionPermission = sessionPermissions?.find(permissionName => permissionName === permission)

  if (!sessionPermission) {
    throw new PermissionError(findPermission(permission))
  }
}

module.exports = {
  validate
}

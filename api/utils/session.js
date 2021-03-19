const { PermissionError } = require('../errors/http.error')
const SessionData = require('../src/data/session.data')

const validate = async (session, permission) => {
  const { permissions: sessionPermissions } = await SessionData.getSession(session)
  const sessionPermission = sessionPermissions?.find(permissionName => permissionName === permission)

  if (!sessionPermission) {
    throw new PermissionError(permission)
  }
}

module.exports = {
  validate
}

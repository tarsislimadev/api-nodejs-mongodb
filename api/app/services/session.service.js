const UserData = require('../data/users.data')
const SessionData = require('../data/session.data')
const { ServiceError } = require('../../utils/errors')

const createSession = async (username, password) => {
  const { user: { id, password: userPassword, permissions } } = await UserData.getUserWithPassword({ username })
  if (password !== userPassword) throw new ServiceError(ServiceError.INVALID_PASSWORD())
  return await SessionData.createSession(id, permissions)
}

module.exports = {
  createSession
}

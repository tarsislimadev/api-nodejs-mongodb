const UserData = require('../data/users.data')
const SessionData = require('../data/session.data')
const { InvalidPasswordError } = require('../../errors/service.error')

const createSession = async (username, password) => {
  const { user: { id, password: userPassword, permissions } } = await UserData.getUserWithPassword({ username })
  if (password !== userPassword) throw new InvalidPasswordError()
  return await SessionData.createSession(id, permissions)
}

module.exports = {
  createSession
}

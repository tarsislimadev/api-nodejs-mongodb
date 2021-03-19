const { LoginSessionModel } = require('../models')
const { SessionNotFoundError } = require('../../errors/data.error')

const createSession = async (userId, permissions = []) => {
  const { key, deleted } = await LoginSessionModel.create({ userId, permissions })
  return { key, expires: deleted }
}

const getSession = async (key) => {
  const session = await LoginSessionModel.findOne({ key })
  if (!session) throw new SessionNotFoundError()
  const { userId, permissions, created, deleted: expires } = session
  return { userId, permissions, created, expires }
}

module.exports = {
  createSession,
  getSession
}

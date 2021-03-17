const { LoginSessionModel } = require('../models')
const { DataError } = require('../../utils/errors')

const createSession = async (userId, permissions = []) => {
  const { key, deleted } = await LoginSessionModel.create({ userId, permissions })
  return { key, expires: deleted }
}

const getSession = async (key) => {
  const session = await LoginSessionModel.findOne({ key })
  if (!session) throw new DataError(DataError.SESSION_NOT_FOUND())
  const { userId, permissions, created, deleted: expires } = session
  return { userId, permissions, created, expires }
}

module.exports = {
  createSession,
  getSession
}

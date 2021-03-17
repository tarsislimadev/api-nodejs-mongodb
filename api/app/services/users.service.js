const UserData = require('../data/users.data')
const SessionData = require('../data/session.data')
const Session = require('../../utils/session')

const listUsers = async (key, page = 1) => {
  const { users } = await UserData.listUsers({}, page)
  return { page, users }
}

const getUser = async (key) => {
  const { userId } = await SessionData.getSession(key)
  return await UserData.getUserById(userId)
}

const getUserById = async (key, userId) => {
  return await UserData.getUserById(userId)
}

const getUserByUsername = async (key, username) => {
  return await UserData.getUserByUsername(username)
}

const createUser = async (key, { username, password, permissions }) => {
  await Session.validate(key, 'createUsers')
  return await UserData.createUser({ username, password, permissions })
}

const editUser = async (key, id, { permissions = [] }) => {
  await Session.validate(key, 'editUsers')
  return await UserData.editUser(id, { permissions })
}

const deleteUserById = async (key, id) => {
  await Session.validate(key, 'removeUsers')
  await UserData.deleteUser(id)
}

module.exports = {
  listUsers,
  getUser,
  getUserById,
  getUserByUsername,
  createUser,
  editUser,
  deleteUserById
}

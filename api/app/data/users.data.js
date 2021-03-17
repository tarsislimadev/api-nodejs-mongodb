const { UserModel } = require('../models')
const { paginate } = require('../../utils/array')
const { DataError } = require('../../utils/errors')
const { findPermissions } = require('../../helpers/constants')

const getUserWithPassword = async (filter = {}) => {
  const user = await UserModel.findOne(filter)
  if (!user) throw new DataError(DataError.USER_NOT_FOUND())
  const { _id: id, username, password, permissions } = user
  return { user: { id, username, password, permissions } }
}

const getUser = async (filter = {}) => {
  const { user: { id, username, permissions } } = await getUserWithPassword(filter)
  return { user: { id, username, permissions } }
}

const getUserByUsernameAndPassword = async (username, password) => {
  return await getUser({ username, password })
}

const getUserByUsername = async (username) => {
  return await getUser({ username })
}

const getUserById = async (id) => {
  return await getUser({ _id: id })
}

const createUser = async ({ username, password, permissions }) => {
  try {
    await getUserByUsername(username)
  } catch (error) {
    if (error instanceof DataError) {
      if (!findPermissions(permissions)) {
        throw new DataError(DataError.PERMISSION_NOT_FOUND())
      }

      await UserModel.create({ username, password, permissions })
      return getUser({ username, password, permissions })
    } else {
      throw error
    }
  }

  throw new DataError(DataError.USER_EXISTS())
}

const editUser = async (id, { password, permissions }) => {
  const { ok } = await UserModel.updateOne({ _id: id }, { password, permissions })
  if (!ok) throw new DataError(DataError.USER_NOT_UPDATED())
  return await getUserById(id)
}

const deleteUser = async (id) => {
  const { ok } = await UserModel.deleteOne({ _id: id })
  if (!ok) throw new DataError(DataError.USER_NOT_DELETED())
}

const listUsers = async (filter = {}, page = 1) => {
  const { offset, length } = paginate(page)
  const data = await UserModel.find(filter, {}, { skip: offset, limit: length })
  const users = data.map(({ _id, username, permissions }) => ({ id: _id, username, permissions }))
  return { users }
}

module.exports = {
  getUserWithPassword,
  getUser,
  getUserById,
  getUserByUsername,
  getUserByUsernameAndPassword,
  createUser,
  editUser,
  deleteUser,
  listUsers
}

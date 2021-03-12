const { UserModel } = require('../models')

module.exports = {
  async list (_, res) {
    const users = await UserModel.find()
    res.ok({ users })
  },
  async create ({ body: { username, password, permissions } }, res) {
    await UserModel.create({ username, password, permissions })
    res.ok()
  },
  async edit ({ body: { id, username, password, permissions } }, res) {
    const { ok } = await UserModel.updateOne({ _id: id }, { username, password, permissions })
    if (ok) res.ok()
  },
  async delete ({ body: { id } }, res) {
    const { ok } = await UserModel.deleteOne({ _id: id })
    if (ok) res.ok()
  },
  async get ({ params: { id } }, res) {
    const user = await UserModel.findOne({ _id: id })
    if (user) res.ok({ user })
  }
}

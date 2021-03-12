const { UserModel, LoginSessionModel } = require('../models')

module.exports = {
  async login ({ body: { username, password } }, res) {
    const user = await UserModel.findOne({ username, password })
    if (user) {
      const { _id: userId } = user
      const login = await LoginSessionModel.create({ userId })
      if (login) {
        const { key } = login
        return res.ok({ key })
      }
    }
    res.nok(400, 'Verify user data')
  }
}

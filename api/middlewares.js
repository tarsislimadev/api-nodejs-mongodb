const { LoginSessionModel } = require('../models')

module.exports = {
  async auth ({ body: { key } }, res, next) {
    try {
      const { deleted } = await LoginSessionModel.findOne({ key })
      if (deleted > Date.now()) {
        next()
        return
      }
    } catch (error) {}
    res.nok(403, 'Authorization is required.')
  }
}

const { responseOK } = require('../utils/response')

module.exports = {
  login (req, res) {
    const key = 'SouthSystem'
    responseOK(res, { key })
  }
}

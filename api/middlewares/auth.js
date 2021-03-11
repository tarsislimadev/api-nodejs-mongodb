const { responseNOK } = require('../utils/response')

module.exports = {
  isAuth (req, res, next) {
    if (req.headers['Auth-Key'] === 'SouthSystem') next()
    else responseNOK(res, 400, 'Authorization is required.')
  }
}

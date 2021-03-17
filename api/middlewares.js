const SessionData = require('./app/data/session.data')
const { HttpError } = require('./errors/http.error')

module.exports = {
  async auth ({ body: { key } }, res, next) {
    try {
      const { expires } = await SessionData.getSession(key)
      if (expires >= Date.now()) {
        next()
      } else {
        throw new HttpError(403, 'Expired session.')
      }
    } catch (error) {
      res.error(error)
    }
  }
}

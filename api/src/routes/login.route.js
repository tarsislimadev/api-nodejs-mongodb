const SessionService = require('../services/session.service')

const router = require('express').Router()

router.post('/', async ({ body: { username, password } }, res) => {
  try {
    const { key, expires } = await SessionService.createSession(username, password)
    res.ok({ key, expires })
  } catch (error) {
    res.error(error)
  }
})

module.exports = router

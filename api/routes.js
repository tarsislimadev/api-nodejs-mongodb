const {
  LoginRoute,
  UsersRoute
} = require('./app/routes')

const router = require('express').Router()

router.use('/login', LoginRoute)
router.use('/users', UsersRoute)

module.exports = router

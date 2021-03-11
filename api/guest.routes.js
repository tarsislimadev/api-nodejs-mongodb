const login = require('./controllers/login')
const router = require('express').Router()

router.get('/', (req, res) => res.send({ api: 'South System' }))

router.post('/login', login.login)

module.exports = router

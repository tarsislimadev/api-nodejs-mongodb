const { UsersController, LoginController } = require('./controllers')
const { auth } = require('./middlewares')

const router = require('express').Router()

router.get('/', (req, res) => res.send({ api: 'South System' }))

// login routes
router.post('/login', LoginController.login)

// user's routes
router.get('/users', auth, UsersController.list)
router.get('/users/:id', auth, UsersController.get)
router.post('/users', auth, UsersController.create)
router.put('/users', auth, UsersController.edit)
router.delete('/users', auth, UsersController.delete)

module.exports = router

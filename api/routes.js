const users = require('./controllers/users')
const products = require('./controllers/products')
const login = require('./controllers/login')
const { isAuth } = require('./middlewares/auth')

const router = require('express').Router()

router.get('/', (req, res) => res.send({ api: 'South System' }))

// login routes
router.post('/login', login.login)

// user's routes
router.get('/users', isAuth, users.list)
router.get('/users/:id', isAuth, users.get)
router.post('/users', isAuth, users.create)
router.put('/users', isAuth, users.edit)
router.delete('/users', isAuth, users.delete)

// product's routes
router.get('/products', isAuth, products.list)
router.get('/products/:id', isAuth, products.get)
router.post('/products', isAuth, products.create)
router.put('/products', isAuth, products.edit)
router.delete('/products', isAuth, products.delete)

module.exports = router

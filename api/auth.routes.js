const users = require('./controllers/users')
const products = require('./controllers/products')

const router = require('express').Router()

// user's routes
router.get('/users', users.list)
router.get('/users/:id', users.get)
router.post('/users', users.create)
router.put('/users', users.edit)
router.delete('/users', users.delete)

// product's routes
router.get('/products', products.list)
router.get('/products/:id', products.get)
router.post('/products', products.create)
router.put('/products', products.edit)
router.delete('/products', products.delete)

module.exports = router

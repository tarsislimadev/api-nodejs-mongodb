const { auth } = require('../../middlewares')
const UsersService = require('../services/users.service')

const router = require('express').Router()

router.get('/', auth, async ({ body: { key, page = 1 } }, res) => {
  try {
    const list = await UsersService.listUsers(key, page)
    res.ok(list)
  } catch (error) {
    res.error(error)
  }
})

router.get('/me', auth, async ({ body: { key } }, res) => {
  try {
    const { user } = await UsersService.getUser(key)
    res.ok({ user })
  } catch (error) {
    res.error(error)
  }
})

router.get('/:id', auth, async ({ body: { key }, params: { id } }, res) => {
  try {
    const { user } = await UsersService.getUserById(key, id)
    res.ok({ user })
  } catch (error) {
    res.error(error)
  }
})

router.post('/', auth, async ({ body: { key, username, password, permissions } }, res) => {
  try {
    const { user } = await UsersService.createUser(key, { username, password, permissions })
    res.ok({ user })
  } catch (error) {
    res.error(error)
  }
})

router.put('/:id', auth, async ({ body: { key, password, permissions }, params: { id } }, res) => {
  try {
    const { user } = await UsersService.editUser(key, id, { password, permissions })
    res.ok({ user })
  } catch (error) {
    res.error(error)
  }
})

router.delete('/:id', auth, async ({ body: { key }, params: { id } }, res) => {
  try {
    await UsersService.deleteUserById(key, id)
    res.ok()
  } catch (error) {
    res.error(error)
  }
})

module.exports = router

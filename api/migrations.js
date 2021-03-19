const { mongoose } = require('./database')
const { permissions } = require('./helpers/constants.js')
const { createUser } = require('./src/data/users.data')

createUser({
  username: 'username',
  password: 'username',
  permissions: permissions.map(({ name }) => name)
})
  .then(() => mongoose.connection?.close())
  .catch(error => console.error(error))
  .finally(() => console.log('Migration OK'))

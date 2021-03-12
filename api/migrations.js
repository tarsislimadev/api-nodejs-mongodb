const { mongoose, UserModel } = require('./models')

new Promise(resolve => UserModel.create({ username: 'username', password: 'password' }, resolve))
  .finally(() => mongoose.disconnect())

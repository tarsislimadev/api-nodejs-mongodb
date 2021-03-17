
const permissions = [
  {
    name: 'createUsers'
  },
  {
    name: 'editUsers'
  },
  {
    name: 'removeUsers'
  },
  {
    name: 'listUsers',
    responseFields: [
      'username',
      'permissions'
    ]
  }
]

const validatePermission = (permission) => ({ name }) => name === permission

const findPermission = (permission) => permissions.find(validatePermission(permission))

const findPermissions = (perms) => perms.every(findPermission)

module.exports = {
  permissions,
  findPermissions,
  findPermission
}

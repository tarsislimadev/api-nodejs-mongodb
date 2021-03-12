
const ok = (res) => {
  res.ok = (data = null) =>
    res.status(200).json({ ...data, message: null, status: 'success' })
}

const nok = (res) => {
  res.nok = (status, message = 'Error', data = null) =>
    res.status(status).json({ data, message, status: 'error' })
}

module.exports = (_, res, next) => {
  ok(res)
  nok(res)
  next()
}


const ok = (res) => {
  const status = 'success'
  const message = null
  res.ok = (data = null) =>
    res.status(200).json({ data, message, status })
}

const error = (res) => {
  const status = 'error'
  res.error = (error) => {
    // console.error({ error })
    const { status: statusCode = 500, message = 'Server error', data = null } = error
    res.status(statusCode).json({ data, message, status })
  }
}

module.exports = (_, res, next) => {
  ok(res)
  error(res)
  next()
}

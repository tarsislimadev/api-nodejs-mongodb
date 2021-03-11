
module.exports = {
  responseOK (res, data = {}) {
    res.status(200).json({
      message: null,
      data
    })
  },
  reponseNOK (res, status = 500, message = 'Server error') {
    res.status(status).json({
      message
    })
  }
}

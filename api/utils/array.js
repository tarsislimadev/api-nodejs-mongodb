
module.exports = {
  paginate (page = 1) {
    const length = 10
    const offset = length * Math.max(page - 1, 0)
    return { length, offset }
  }
}

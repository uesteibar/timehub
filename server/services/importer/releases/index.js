const mapper = require('../../mappers/release')
const loadPaginated = require('../load-paginated')

const call = (data) => {
  return loadPaginated({
    path: `${data.key}/releases?state=all`,
    data,
    mapper,
  })
}

module.exports = call

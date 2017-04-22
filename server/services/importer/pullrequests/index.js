const mapper = require('../../mappers/pullrequest')
const loadPaginated = require('../load-paginated')

const call = (data) => {
  return loadPaginated({
    path: `${data.key}/pulls?state=all`,
    data,
    mapper,
  })
}

module.exports = call

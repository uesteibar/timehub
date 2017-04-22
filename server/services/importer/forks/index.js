const mapper = require('../../mappers/fork')
const loadPaginated = require('../load-paginated')

const call = (data) => {
  return loadPaginated({
    path: `${data.key}/forks`,
    data,
    mapper,
  })
}

module.exports = call

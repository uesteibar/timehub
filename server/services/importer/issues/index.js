const mapper = require('../../mappers/issue')
const loadPaginated = require('../load-paginated')

const call = (data) => {
  return loadPaginated({
    path: `${data.key}/issues?state=all`,
    data,
    mapper,
  })
}

module.exports = call

const mapper = require('../../mappers/issue')
const loadPaginated = require('../load-paginated')

const call = (data) => {
  return loadPaginated({
    path: `${data.key}/issues?state=all`,
    data,
    mapper,
    filter: (events) => {
      return events.filter((event) => !event.html_url.includes('/pull/'))
    }
  })
}

module.exports = call

const github = require('../../api/github')
const mapper = require('../../mappers/pullrequest')

const flatten = (arrays) => [].concat.apply([], arrays)
const clean = (items) => items.filter((item) => !!item)

const call = (data) => {
  let times = []
  for (let i = 1; i < 10; i++) {
    times.push(i)
  }
  const promises = times.map((i) => {
    return github.get(`${data.key}/pulls?state=all&page=${i}`)
  })
  return Promise.all(promises)
    .then((pullrequests) => {
      data.events = data.events.concat(mapper(clean(flatten(pullrequests))))
      return data
    })
}

module.exports = call

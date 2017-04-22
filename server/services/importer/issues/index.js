const github = require('../../api/github')
const mapper = require('../../mappers/issue')

const flatten = (arrays) => [].concat.apply([], arrays)
const clean = (items) => items.filter((item) => !!item)

const call = (data) => {
  let times = []
  for (let i = 1; i < 10; i++) {
    times.push(i)
  }
  const promises = times.map((i) => {
    return github.get(`${data.key}/issues?state=all&page=${i}`)
  })
  return Promise.all(promises)
    .then((issues) => {
      data.events = data.events.concat(mapper(clean(flatten(issues))))
      return data
    })
}

module.exports = call

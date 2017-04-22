const github = require('../api/github')

const flatten = (arrays) => [].concat.apply([], arrays)
const clean = (items) => items.filter((item) => !!item)

const call = ({ path, data, mapper }) => {
  let times = []
  for (let i = 1; i < 10; i++) {
    times.push(i)
  }
  const promises = times.map((i) => {
    return github.get(path, { page: i })
  })
  return Promise.all(promises)
    .then((events) => {
      data.events = data.events.concat(mapper(clean(flatten(events))))
      return data
    })
}

module.exports = call

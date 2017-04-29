const importRepo = require('./repo')
const importIssues = require('./issues')
const importPulls = require('./pullrequests')
const importReleases = require('./releases')
const importForks = require('./forks')

const call = (key) => {
  console.log(`Importing data for ${key}`)
  return importRepo(key)
    .then((data) => importIssues(data))
    .then((data) => importPulls(data))
    .then((data) => importReleases(data))
    .then((data) => importForks(data))
    .then((data) => {
      data.events = data.events.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      return data
    })
}

module.exports = call

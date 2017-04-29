const importRepo = require('./repo')
const importIssues = require('./issues')
const importPulls = require('./pullrequests')
const importReleases = require('./releases')
const importForks = require('./forks')

const call = (key, callback) => {
  console.log(`Starting import process for ${key}`)
  return importRepo(key)
    .then((data) => importIssues(data))
    .then((data) => importPulls(data))
    .then((data) => importReleases(data))
    .then((data) => importForks(data))
    .then((data) => {
      data.events = data.events.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      callback(data)
      console.log(`Imported ${key}`)
    })
}

module.exports = call

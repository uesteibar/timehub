const github = require('../../api/github')

const fetch = (key) => {
  const parts = key.split('/')
  return github.repos.get({ owner: parts[0], repo: parts[1] })
}

module.exports = { fetch }

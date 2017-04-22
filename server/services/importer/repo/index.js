const github = require('../../api/github')
const mapper = require('../../mappers/repo')
const db = require('../../../db')

const call = (key) => {
  return github.get(key).then((data) => mapper(data))
}

module.exports = call

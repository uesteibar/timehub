const rq = require('request-promise')
require('dotenv').config()

const authParams = {
  client_id: process.env.GITHUB_CLIENT_ID,
  client_secret: process.env.GITHUB_CLIENT_SECRET,
}

const get = (key, params = {}) => {
  Object.assign(params, authParams)

  return rq({
    uri: `https://api.github.com/repos/${key}`,
    qs: params,
    headers: {
      'User-Agent': 'timehub',
    },
    json: true,
  })
}

module.exports = { get }

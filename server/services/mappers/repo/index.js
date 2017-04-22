const userMapper = require('../user')

const map = (data) => {
  return {
    key: data.full_name,
    description: data.description,
    createdAt: data.created_at,
    user: userMapper(data.owner),
    url: data.html_url,
    events: [],
  }
}

module.exports = map

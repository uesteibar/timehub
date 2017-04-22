const userMapper = require('../user')

const map = (pulls) => {
  return pulls.map((pull) => {
    return {
      type: 'pull_request',
      content: pull.title,
      user: userMapper(pull.user),
      createdAt: pull.created_at,
    }
  })
}

module.exports = map

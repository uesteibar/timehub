const userMapper = require('../user')

const map = (issues) => {
  return issues.map((issue) => {
    return {
      type: 'issue',
      content: issue.title,
      user: userMapper(issue.user),
      createdAt: issue.created_at,
    }
  })
}

module.exports = map

const userMapper = require('../user')
const repoMapper = require('../repo')

const map = (forks) => {
  return forks.map((fork) => {
    return {
      type: 'fork',
      repo: repoMapper(fork),
      user: userMapper(fork.owner),
      createdAt: fork.created_at,
    }
  })
}

module.exports = map

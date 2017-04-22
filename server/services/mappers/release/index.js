const userMapper = require('../user')

const map = (releases) => {
  return releases.map((release) => {
    return {
      type: 'release',
      content: release.tag_name,
      user: userMapper(release.author),
      createdAt: release.created_at,
    }
  })
}

module.exports = map

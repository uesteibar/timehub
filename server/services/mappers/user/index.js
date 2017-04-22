const map = (user) => {
  return {
    username: user.login,
    avatar: user.avatar_url,
    profileUrl: user.html_url
  }
}

module.exports = map

/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
/* eslint-enable no-unused-vars */
import injectSheet from 'react-jss'

const styles = {
  avatar: {
    marginTop: 10,
    display: 'inline-block',
    fontSize: 18,
  },
  img: {
    marginRight: 10,
    borderRadius: 20,
    verticalAlign: 'middle',
    width: 40,
  },
}

class UserProfile extends Component {
  render() {
    const { user: { profileUrl, avatar, username }, classes } = this.props

    return (
      <a className={ classes.avatar } href={ profileUrl } target="_blank">
        <img className={ classes.img } src={ avatar } alt={ username } />
        @{username}
      </a>
    )
  }
}

export default injectSheet(styles)(UserProfile)

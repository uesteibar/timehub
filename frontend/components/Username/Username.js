/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
/* eslint-enable no-unused-vars */

class Username extends Component {
  render() {
    const { username, profileUrl } = this.props.user
    return (
      <a href={ profileUrl } target="_blank">
        @{username}
      </a>
    )
  }
}

export default Username

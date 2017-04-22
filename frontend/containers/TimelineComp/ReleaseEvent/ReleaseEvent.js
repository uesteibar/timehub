/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
/* eslint-enable no-unused-vars */

import { TimelineEvent } from 'react-event-timeline'
import Icon from '../../../components/Icon'

class ReleaseEvent extends Component {
  userProfile = user => {
    return (
      <a className="avatar" href={ user.profileUrl } target="_blank">
        <img src={ user.avatar } alt={ user.username } />
        {user.username}
      </a>
    )
  };

  render() {
    const {
      item: { user, createdAt, content }
    } = this.props
    return (
      <TimelineEvent
        title={ this.userProfile(user) }
        createdAt={ createdAt }
        icon={ <Icon name='tag' /> } >
        <span className="content">{content}</span>
      </TimelineEvent>
    )
  }
}

export default ReleaseEvent

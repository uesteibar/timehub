/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
/* eslint-enable no-unused-vars */

import { TimelineEvent } from 'react-event-timeline'
import Icon from '../../../components/Icon'
import octicons from 'octicons'

class PullRequestEvent extends Component {
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
        icon={ <Icon name='git-pull-request' /> } >
        <span className="content">{content}</span>
      </TimelineEvent>
    )
  }
}

export default PullRequestEvent

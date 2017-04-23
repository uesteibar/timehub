/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
/* eslint-enable no-unused-vars */

import { TimelineEvent } from 'react-event-timeline'
import Icon from '../../../components/Icon'
import Username from '../../../components/Username'

class RepoCreatedEvent extends Component {
  userProfile = user => {
    return (
      <a className="avatar" href={ user.profileUrl } target="_blank">
        <img src={ user.avatar } alt={ user.username } />
        @{user.username}
      </a>
    )
  };

  render() {
    const {
      item: { user, createdAt }
    } = this.props
    return (
      <TimelineEvent
        title={ this.userProfile(user) }
        createdAt={ createdAt }
        iconColor='#28a745'
        icon={ <Icon name='code' /> } >
        <span className="content">
          {<Username user={user} />} created this repo!
        </span>
      </TimelineEvent>
    )
  }
}

export default RepoCreatedEvent

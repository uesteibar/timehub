/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
/* eslint-enable no-unused-vars */

import { TimelineEvent } from 'react-event-timeline'
import Icon from '../../../components/Icon'
import Username from '../../../components/Username'

class ReleaseEvent extends Component {
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
      item: { user, createdAt, content }
    } = this.props
    return (
      <TimelineEvent
        title={ this.userProfile(user) }
        createdAt={ createdAt }
        iconColor='#cc317c'
        icon={ <Icon name='tag' /> } >
        <div className='content'>
          <p>
            {<Username user={user} />} tagged a release
          </p>
          <q className='quote'>{content}</q>
        </div>
      </TimelineEvent>
    )
  }
}

export default ReleaseEvent

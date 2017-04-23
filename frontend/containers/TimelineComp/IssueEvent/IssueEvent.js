/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
/* eslint-enable no-unused-vars */

import { TimelineEvent } from 'react-event-timeline'
import Icon from '../../../components/Icon'
import Username from '../../../components/Username'
import octicons from 'octicons'

class IssueEvent extends Component {
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
        iconColor='#c00000'
        icon={ <Icon name='issue-opened' /> } >
        <div className='content'>
          <p>
            {<Username user={user} />} created an issue
          </p>
          <q className='quote'>{content}</q>
        </div>
      </TimelineEvent>
    )
  }
}

export default IssueEvent

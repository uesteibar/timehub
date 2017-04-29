/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
/* eslint-enable no-unused-vars */

import TimelineEventComp from '../../../components/TimelineEventComp'
import Username from '../../../components/Username'

class PullRequestEvent extends Component {
  render() {
    const { item: { user, createdAt, content } } = this.props

    return (
      <TimelineEventComp
        user={user}
        date={ createdAt }
        icon={ { color: '#28a745', name: 'git-pull-request' } } >
        <p>
          {<Username user={user} />} opened a pull request
        </p>
        <q className='quote'>{content}</q>
      </TimelineEventComp>
    )
  }
}

export default PullRequestEvent

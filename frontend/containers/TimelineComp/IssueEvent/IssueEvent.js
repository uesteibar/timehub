/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
/* eslint-enable no-unused-vars */

import TimelineEventComp from '../../../components/TimelineEventComp'
import Username from '../../../components/Username'

class IssueEvent extends Component {
  render() {
    const { item: { user, createdAt, content } } = this.props

    return (
      <TimelineEventComp
        user={ user }
        date={ createdAt }
        icon={{ color: '#c00000', name: 'issue-opened' }}>
        <p>
          {<Username user={ user } />} created an issue
        </p>
        <q>{content}</q>
      </TimelineEventComp>
    )
  }
}

export default IssueEvent

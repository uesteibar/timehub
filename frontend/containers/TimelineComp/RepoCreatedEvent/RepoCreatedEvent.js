/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
/* eslint-enable no-unused-vars */

import TimelineEventComp from '../../../components/TimelineEventComp'
import Username from '../../../components/Username'

class RepoCreatedEvent extends Component {
  render() {
    const { item: { user, createdAt } } = this.props

    return (
      <TimelineEventComp
        user={user}
        date={ createdAt }
        icon={ { color: '#28a745', name: 'code' } } >
        <p>{<Username user={user} />} created this repo!</p>
      </TimelineEventComp>
    )
  }
}

export default RepoCreatedEvent

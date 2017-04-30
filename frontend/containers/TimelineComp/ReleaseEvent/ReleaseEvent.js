/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
/* eslint-enable no-unused-vars */

import TimelineEventComp from '../../../components/TimelineEventComp'
import Username from '../../../components/Username'

class ReleaseEvent extends Component {
  render() {
    const { item: { user, createdAt, content } } = this.props

    return (
      <TimelineEventComp
        user={ user }
        date={ createdAt }
        icon={{ color: '#cc317c', name: 'tag' }}>
        <p>
          {<Username user={ user } />} tagged a release
        </p>
        <q className="quote">{content}</q>
      </TimelineEventComp>
    )
  }
}

export default ReleaseEvent

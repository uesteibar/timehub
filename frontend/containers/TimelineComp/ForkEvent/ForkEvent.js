/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
/* eslint-enable no-unused-vars */

import TimelineEventComp from '../../../components/TimelineEventComp'
import Username from '../../../components/Username'

class ForkEvent extends Component {
  render() {
    const { item: { user, repo, createdAt } } = this.props

    return (
      <TimelineEventComp
        user={ user }
        date={ createdAt }
        icon={{ color: '#84b6eb', name: 'repo-forked' }}>
        {<Username user={ user } />}
        {' '}
        forked this repo to
        {' '}
        <a href={ repo.url } target="_blank">{repo.key}</a>
      </TimelineEventComp>
    )
  }
}

export default ForkEvent

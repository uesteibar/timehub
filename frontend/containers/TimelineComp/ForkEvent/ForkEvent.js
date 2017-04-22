/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
/* eslint-enable no-unused-vars */

import { TimelineEvent } from 'react-event-timeline'
import Icon from '../../../components/Icon'

class ForkEvent extends Component {
  userProfile = user => {
    return (
      <a className="avatar" href={ user.profileUrl } target="_blank">
        <img src={ user.avatar } alt={ user.username } />
        {user.username}
      </a>
    )
  };

  render() {
    const { item: { user, repo, createdAt } } = this.props
    return (
      <TimelineEvent
        title={ this.userProfile(user) }
        createdAt={ createdAt }
        icon={ <Icon name="repo-forked" /> }
      >
        <span className="content">
          {user.username}
          {' '}
          forked this repo to
          {' '}
          <a href={ repo.url } target="_blank">{repo.key}</a>
        </span>
      </TimelineEvent>
    )
  }
}

export default ForkEvent

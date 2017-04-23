/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../../ducks/timeline'

import { Timeline, TimelineEvent } from 'react-event-timeline'
import Icon from '../../components/Icon'
import Loading from '../../components/Loading'
import PullRequestEvent from './PullRequestEvent'
import ForkEvent from './ForkEvent'
import ReleaseEvent from './ReleaseEvent'
import RepoCreatedEvent from './RepoCreatedEvent'
import IssueEvent from './IssueEvent'

class TimelineComp extends React.Component {
  userProfile = user => {
    return (
      <a className="avatar" href={ user.profileUrl } target="_blank">
        <img src={ user.avatar } alt={ user.username } />
        {user.username}
      </a>
    )
  };

  render() {
    const { timeline, isLoading } = this.props

    console.log({isLoading})
    if (isLoading) { return <Loading /> }
    if (!timeline.events) { return null }

    return (
      <Timeline>
        {
          timeline.events.map((event, index) => {
            const eventComponents = {
              fork: <ForkEvent key={index} item={event}/>,
              issue: <IssueEvent key={index} item={event}/>,
              pull_request: <PullRequestEvent key={index} item={event}/>,
              release: <ReleaseEvent key={index} item={event}/>,
            }

            return eventComponents[event.type]
          })
        }
        <RepoCreatedEvent key={-1} item={timeline}/>
      </Timeline>
    )
  }
}

const mapActions = dispatch => bindActionCreators(actions, dispatch)
const mapState = store => store.timeline

export default connect(mapState, mapActions)(TimelineComp)

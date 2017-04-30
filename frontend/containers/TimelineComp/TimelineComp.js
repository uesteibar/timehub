/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */

import { Timeline, TimelineEvent } from 'react-event-timeline'
import Icon from '../../components/Icon'
import PullRequestEvent from './PullRequestEvent'
import ForkEvent from './ForkEvent'
import ReleaseEvent from './ReleaseEvent'
import RepoCreatedEvent from './RepoCreatedEvent'
import IssueEvent from './IssueEvent'

class TimelineComp extends React.Component {
  render() {
    const { repo, events } = this.props

    return (
      <Timeline>
        {
          events.map((event, index) => {
            const eventComponents = {
              fork: <ForkEvent key={index} item={event}/>,
              issue: <IssueEvent key={index} item={event}/>,
              pull_request: <PullRequestEvent key={index} item={event}/>,
              release: <ReleaseEvent key={index} item={event}/>,
            }

            return eventComponents[event.type]
          })
        }
        <RepoCreatedEvent key={-1} item={repo}/>
      </Timeline>
    )
  }
}

export default TimelineComp

/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
/* eslint-enable no-unused-vars */
import injectSheet from 'react-jss'

import { TimelineEvent } from 'react-event-timeline'
import Icon from '../Icon'
import UserProfile from '../UserProfile'

const styles = {
  content: {
    paddingBottom: 12,
    fontSize: 18,
  },
}

class TimelineEventComp extends Component {
  render() {
    const { user, date, icon, content, children, classes } = this.props

    return (
      <TimelineEvent
        title={ <UserProfile user={ user } /> }
        createdAt={ date }
        iconColor={ icon.color }
        contentStyle={{ boxShadow: '0 3px 12px -1px rgba(0, 0, 0, .3)' }}
        icon={ <Icon name={ icon.name } /> }>
        <div className={ classes.content }>
          {children}
        </div>
      </TimelineEvent>
    )
  }
}

export default injectSheet(styles)(TimelineEventComp)

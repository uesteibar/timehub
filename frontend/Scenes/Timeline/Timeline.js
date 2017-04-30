/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../../ducks/timeline'

import NotFound from '../NotFound'
import Loading from '../../components/Loading'
import TimelineComp from '../../containers/TimelineComp'
import SearchForm from '../../containers/SearchForm'

class Timeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = { filter: '' }
  }

  componentDidMount() {
    const { username, repo } = this.props.match.params
    this.props.fetchTimeline(`${username}/${repo}`)
  }

  onFilterChange = e => {
    this.setState({ filter: e.target.value.toLowerCase() })
  };

  findInObjectField = object => {
    const { filter } = this.state

    return Object.keys(object).find(attr => {
      return (
        typeof object[attr] === 'string' &&
        object[attr].toLowerCase().match(filter)
      )
    })
  };

  render() {
    const { isLoading, error } = this.props
    let { timeline } = this.props

    if (error) {
      return <NotFound />
    }
    if (isLoading) {
      return <Loading />
    }

    if (!timeline.events) {
      return null
    }

    const events = timeline.events.filter(event => {
      return (
        this.findInObjectField(event) || this.findInObjectField(event.user)
      )
    })

    return (
      <div>
        <SearchForm onChange={ this.onFilterChange } />
        <TimelineComp repo={ timeline } events={ events } />
      </div>
    )
  }
}

const mapActions = dispatch => bindActionCreators(actions, dispatch)
const mapState = store => store.timeline

export default connect(mapState, mapActions)(Timeline)

/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../../ducks/timeline'

class Repository extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: props.term,
    }
  }

  onSubmit = key => {
    this.props.fetchTimeline(key)
  }

  onChange = event => {
    event.preventDefault()

    const keys = event.target.value
      .replace('https://github.com', '')
      .split('?')[0]
      .split('/')

    this.setState({
      term: `/${keys[1]}/${keys[2]}`,
    })
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="searhRepo"
          value={ this.state.repository }
          onChange={ this.onChange }
          placeholder="Paste repository, ej: https://github.com/uesteibar/hyperdocs" />
        <button
          onClick={() => this.onSubmit(this.state.term)}
          className="searhRepo clickable" >
          Get Timeline
        </button>
      </div>
    )
  }
}

const mapActions = dispatch => bindActionCreators(actions, dispatch)
const mapState = store => store.timeline

export default connect(mapState, mapActions)(Repository)

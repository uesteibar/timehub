/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
/* eslint-enable no-unused-vars */

import Header from '../Header'
import Repository from '../Repository'
import TimelineComp from '../TimelineComp'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repository: '',
      timeline: {},
    }
  }

  onSubmit = (key) => {
    fetch(key).then(res => res.json()).then(data => {
      this.setState({ timeline: data })
    })
  }

  render() {
    return (
      <div className="skeleton">
        <Header />
        <Repository onSubmit={this.onSubmit} term={ this.state.repository } />
        <TimelineComp timeline={ this.state.timeline } />
      </div>
    )
  }
}

export default App

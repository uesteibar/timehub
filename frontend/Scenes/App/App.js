/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
/* eslint-enable no-unused-vars */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../ducks'

import NotFound from '../NotFound'
import Timeline from '../Timeline'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <Switch>
            <Route exact path="/:username/:repo" component={ Timeline } />
            <Route component={ NotFound } />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App

/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
/* eslint-enable no-unused-vars */
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../ducks'

import Header from '../Header'
import NotFound from '../NotFound'
import TimelineComp from '../TimelineComp'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/:username/:repo" component={TimelineComp} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App

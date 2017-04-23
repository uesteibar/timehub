/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
/* eslint-enable no-unused-vars */
import { Provider } from 'react-redux'
import store from '../../ducks'

import Header from '../Header'
import RepositoryForm from '../RepositoryForm'
import TimelineComp from '../TimelineComp'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="skeleton">
          <RepositoryForm onSubmit={this.onSubmit} />
          <TimelineComp />
        </div>
      </Provider>
    )
  }
}

export default App

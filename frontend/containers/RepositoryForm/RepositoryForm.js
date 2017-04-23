/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../../ducks/timeline'

class RepositoryForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      repo: '',
    }
  }

  onSubmit = e => {
    e.preventDefault()
    const { username, repo } = this.state
    this.props.fetchTimeline(`/${username}/${repo}`)
  }

  onChangeUsername = e => {
    e.preventDefault()
    this.setState({ username: e.target.value })
  };

  onChangeRepo = e => {
    e.preventDefault()
    this.setState({ repo: e.target.value })
  };

  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <div className='inputGroup'>
          <input
            type="text"
            className="searchRepo"
            value={ this.state.repository }
            onChange={ this.onChangeUsername }
            placeholder="username" />
          /&nbsp;
          <input
            type="text"
            className="searchRepo"
            value={ this.state.repository }
            onChange={ this.onChangeRepo }
            placeholder="repo" />
          <button
            type='submit'
            className="searchRepo button clickable" >
            Go!
          </button>
        </div>
      </form>
    )
  }
}

const mapActions = dispatch => bindActionCreators(actions, dispatch)
const mapState = store => store.timeline

export default connect(mapState, mapActions)(RepositoryForm)

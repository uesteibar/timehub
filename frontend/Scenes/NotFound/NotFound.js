/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */
import injectSheet from 'react-jss'

const styles = {
  container: {
    marginTop: '30vh',
    textAlign: 'center',
  },
}

class NotFound extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={ classes.container }>
        <h1>Nothing here!</h1>
        <p>You should instead go to /:username/:repo</p>
      </div>
    )
  }
}

export default injectSheet(styles)(NotFound)

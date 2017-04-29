/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
/* eslint-enable no-unused-vars */
import injectSheet from 'react-jss'
import cn from 'classnames'

const styles = {
  '@keyframes pulse': {
    'to': {
      transform: 'scale(0.8)',
      opacity: '.5',
    },
  },
  loader: {
    fontFamily: 'Consolas, Menlo, Monaco, monospace',
    fontWeight: 'bold',
    fontSize: 200,
    opacity: .8,
  	textAlign: 'center',
  	marginTop: '20vh',
  },
  span: {
    display: 'inline-block',
    '-webkit-animation': 'pulse .4s alternate infinite ease-in-out',
    animation: 'pulse .4s alternate infinite ease-in-out',
  },
  rightSpan: {
    '-webkit-animation-delay': '.4s',
    animationDelay: '.4s',
  },
}

class Loading extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.loader}>
        <span className={classes.span}>{'{'}</span>
        <span className={cn([classes.span, classes.rightSpan])}>{'}'}</span>
      </div>
    )
  }
}

export default injectSheet(styles)(Loading)

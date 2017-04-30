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
  '@keyframes rotate-one': {
    '0%': {
      transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(0deg)',
    },
    '100%': {
      transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(360deg)',
    },
  },
  '@keyframes rotate-two': {
    '0%': {
      transform: 'rotateX(50deg) rotateY(10deg) rotateZ(0deg)',
    },
    '100%': {
      transform: 'rotateX(50deg) rotateY(10deg) rotateZ(360deg)',
    },
  },
  '@keyframes rotate-three': {
    '0%': {
      transform: 'rotateX(35deg) rotateY(55deg) rotateZ(0deg)',
    },
    '100%': {
      transform: 'rotateX(35deg) rotateY(55deg) rotateZ(360deg)',
    },
  },
  loader: {
    position: 'absolute',
    top: 'calc(50% - 64px)',
    left: 'calc(50% - 64px)',
    width: 128,
    height: 128,
    borderRadius: '50%',
    perspective: 800,
  },
  inner: {
    position: 'absolute',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  one: {
    left: '0%',
    top: '0%',
    animation: 'rotate-one 1s linear infinite',
    borderBottom: '6px solid black',
  },
  two: {
    right: '0%',
    top: '0%',
    animation: 'rotate-two 1s linear infinite',
    borderRight: '6px solid black',
  },
  three: {
    left: '0%',
    bottom: '0%',
    animation: 'rotate-three 1s linear infinite',
    borderTop: '6px solid black',
  },
}

class Loading extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.loader}>
        <div className={cn([classes.inner, classes.one])}></div>
        <div className={cn([classes.inner, classes.two])}></div>
        <div className={cn([classes.inner, classes.three])}></div>
      </div>
    )
  }
}

export default injectSheet(styles)(Loading)

/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
/* eslint-enable no-unused-vars */

import octicons from 'octicons'

class Icon extends Component {
  render() {
    const icon = octicons[this.props.name].toSVG()

    return <div dangerouslySetInnerHTML={{ __html: icon }} />
  }
}

export default Icon

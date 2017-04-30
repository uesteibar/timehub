/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */
import injectSheet from 'react-jss'
import Icon from '../../components/Icon'

const styles = {
  container: {
    minWidth: 200,
    maxWidth: 500,
    margin: '20px auto',
  },
  form: {
    position: 'relative',
    display: 'flex',
    color: '#555',
  },
  input: {
    flex: '1 0 auto',
    margin: '0 12px',
    padding: '8px 20px',
    height: 40,
    border: 0,
    fontSize: 20,
    fontWeight: 300,
    boxShadow: '0 3px 12px -1px rgba(0, 0, 0, .3)',
    transition: 'all .15s ease-in-out',
    '&:focus': {
      flex: '1 0 90%',
      margin: 0,
      outline: 0,
    },
  },
  label: {
    position: 'absolute',
    top: 14,
    right: 30,
    transition: 'all .15s ease-in-out',
    'input:focus + &': {
      transform: 'translateX(12px)',
    },
  },
}

class SearchForm extends React.Component {
  render() {
    const { classes, onChange } = this.props

    return (
      <div className={ classes.container }>
        <form action="" className={ classes.form }>
          <input
            className={ classes.input }
            onChange={ onChange }
            type="text"
            placeholder="type to search..."
          />
          <label className={ classes.label }>
            <Icon name="search" />
          </label>
        </form>
      </div>
    )
  }
}

export default injectSheet(styles)(SearchForm)

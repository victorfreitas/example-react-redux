import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ShowCounts from 'src/containers/Counter/ShowCounts'

class Counter extends Component {
  handleClick(value) {
    const { makeCounters } = this.props
    makeCounters(value)
  }

  render() {
    return (
      <div className="counter-container">
        <ShowCounts />
        <div className="buttons">
          <button type="button" className="btn" onClick={() => this.handleClick(1)}>
            Increment
          </button>

          <button type="button" className="btn" onClick={() => this.handleClick(-1)}>
            Decrement
          </button>
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  makeCounters: PropTypes.func.isRequired,
}

export default Counter

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Counts from 'src/containers/Counter/Counts'
import Buttons from './Buttons'

class Counter extends Component {
  getButtons() {
    return [
      { text: 'Increment', click: () => this.addCount(1) },
      { text: 'Decrement', click: () => this.addCount(-1) },
    ]
  }

  addCount(value) {
    const { makeCounters } = this.props
    makeCounters(value)
  }

  render() {
    return (
      <div className="counter-container">
        <Counts />
        <Buttons list={this.getButtons()} />
      </div>
    )
  }
}

Counter.propTypes = {
  makeCounters: PropTypes.func.isRequired,
}

export default Counter

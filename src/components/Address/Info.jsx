import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

class Info extends Component {
  getItems() {
    const { address } = this.props
    const list = Object.entries(address)

    return list.map(Info.renderItem)
  }

  static renderItem([key, value]) {
    return (
      <p key={key}>
        <span>
          {key}
          {':'}
        </span>
        <strong>
          {value}
        </strong>
      </p>
    )
  }

  renderError() {
    const { address } = this.props

    return (
      <p className="error-message">
        {address.error}
      </p>
    )
  }

  render() {
    const { address } = this.props

    if (address.error) {
      return this.renderError()
    }

    return (
      <div className={classNames('info', { hidden: !address.cep })}>
        {this.getItems()}
      </div>
    )
  }
}

Info.propTypes = {
  address: PropTypes.shape({
    cep: PropTypes.string,
    error: PropTypes.string,
  }).isRequired,
}

export default Info

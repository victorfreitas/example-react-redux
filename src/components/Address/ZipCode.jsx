import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

class ZipCode extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  requestZipCode(value) {
    const { changeAddress, changeZipCode } = this.props

    changeAddress(value)
    changeZipCode('')
  }

  handleChange({ target: { value } }) {
    const { changeZipCode } = this.props

    changeZipCode(value)

    if (value.length === 8) {
      this.requestZipCode(value)
    }
  }

  handleSubmit(event) {
    const { value } = this.props

    event.preventDefault()
    this.requestZipCode(value)
  }

  render() {
    const { isWait, value } = this.props

    return (
      <form
        className={classNames('zipcode-form', { spinner: isWait })}
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="zipcode">
          CEP:
          <input
            type="number"
            id="zipcode"
            value={value}
            placeholder="Enter your ZIP Code"
            onChange={this.handleChange}
            disabled={isWait}
          />
        </label>
      </form>
    )
  }
}

ZipCode.propTypes = {
  value: PropTypes.string.isRequired,
  changeAddress: PropTypes.func.isRequired,
  changeZipCode: PropTypes.func.isRequired,
  isWait: PropTypes.bool.isRequired,
}

export default ZipCode

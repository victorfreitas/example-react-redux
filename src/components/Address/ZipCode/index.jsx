import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Label from './Label'

class ZipCode extends Component {
  getClassNames() {
    const { isWait } = this.props

    return classNames('zipcode-form', {
      spinner: isWait,
    })
  }

  handleChange = ({ target: { value } }) => {
    const { changeZipCode } = this.props

    changeZipCode(value)

    if (value.length === 8) {
      this.request(value)
    }
  }

  handleSubmit = (event) => {
    const { value } = this.props

    event.preventDefault()
    this.request(value)
  }

  request(value) {
    const { changeAddress, changeZipCode } = this.props

    changeAddress(value)
    changeZipCode('')
  }

  render() {
    const { isWait, value } = this.props

    return (
      <form className={this.getClassNames()} onSubmit={this.handleSubmit}>
        <Label value={value} change={this.handleChange} disabled={isWait} />
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

import React, { Component } from 'react'
import classNames from 'classnames'

import { formatZipCode } from 'src/helpers'

class ZipCode extends Component {
	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeZipCode = this.handleChangeZipCode.bind(this)
	}

	isValidZipCode() {
		return (this.props.value.length === 8)
	}

	findZipCode() {
    this.props.changeAddress(this.props.value)
    this.props.changeZipCode('')
  }

	handleChangeZipCode({ target }) {
		this.props.changeZipCode(target.value)
	}

	handleSubmit(event) {
		event.preventDefault()
		this.findZipCode()
	}

	componentDidUpdate() {
		if (this.isValidZipCode()) {
			this.findZipCode()
    }
  }

	renderZipCodeText() {
		if (!this.props.value) {
			return null
		}

		return (
			<p>
				CEP: {formatZipCode(this.props.value)}
			</p>
		)
  }

	render() {
		return (
			<form
				className={classNames('zipcode-form', {
					'spinner': this.props.isWait
				})}
				onSubmit={this.handleSubmit}
			>
				<label htmlFor="zipcode">
					CEP:
				</label>

				<input
          type='number'
					value={this.props.value}
					placeholder='Enter your ZIP Code'
          onChange={this.handleChangeZipCode}
          disabled={this.props.isWait}
				/>

				{this.renderZipCodeText()}
			</form>
		)
	}
}

export default ZipCode

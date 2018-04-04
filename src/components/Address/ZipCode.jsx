import React, { Component } from 'react'

import classNames from 'classnames'

import { getAddressByZipCode } from '../../requests'
import { formatZipCode } from '../../helpers'

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
		getAddressByZipCode(this.props.value)
			.then(data => this.onSuccess(data))
			.catch(() => {})
  }

  clear() {
    this.props.changeZipCode('')
  }

  onSuccess(data) {
    this.props.changeAddress(data)
    this.clear()
  }

	handleChangeZipCode({ target }) {
		this.props.changeZipCode(target.value)
	}

	handleSubmit(event) {
		event.preventDefault()
		this.findZipCode()
	}

	componentDidUpdate({ value }) {
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
					'spinner': this.isValidZipCode()
				})}
				onSubmit={this.handleSubmit}
			>
				<label htmlFor="zipcode">
					CEP:
				</label>

				<input
					value={this.props.value}
					placeholder='Enter your ZIP Code'
					onChange={this.handleChangeZipCode}
				/>

				{this.renderZipCodeText()}
			</form>
		)
	}
}

export default ZipCode

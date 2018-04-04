import React, { Component } from 'react'

import ShowCounts from '../../containers/Counter/ShowCounts'

class Counter extends Component {
	constructor(props) {
		super(props)

		this.handleIncrement = this.handleIncrement.bind(this)
		this.handleDecrement = this.handleDecrement.bind(this)
	}

	handleIncrement() {
		this.props.increment();
	}

	handleDecrement() {
		this.props.decrement()
	}

	render() {
		return (
			<div>
				<ShowCounts />
				<div className='buttons'>
					<a className='btn' onClick={this.handleIncrement}>
						Increment
					</a>

					<a className='btn' onClick={this.handleDecrement}>
						Decrement
					</a>
				</div>
			</div>
		)
	}
}

export default Counter

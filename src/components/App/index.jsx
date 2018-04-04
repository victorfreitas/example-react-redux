import React, { Component } from 'react'

import Counter from '../../containers/Counter'
import Address from '../../components/Address'

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="container">
				<h1 className="title">
					React + Redux
				</h1>
				<Counter />
				<Address />
			</div>
		)
	}
}

export default App

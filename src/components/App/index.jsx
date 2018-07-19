import React, { Component } from 'react'

import Counter from 'src/containers/Counter'
import Address from 'src/components/Address'
import Icons from 'src/components/Icons'

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="container">
				<h1 className="title">
					React Redux Starter
				</h1>
        <Icons />
				<Counter />
				<Address />
			</div>
		)
	}
}

export default App

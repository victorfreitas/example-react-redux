import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducers from './reducers'

import '~/style.scss'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers, devTools)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

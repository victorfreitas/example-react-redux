import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const middlewares = [applyMiddleware(thunk)]

window.__REDUX_DEVTOOLS_EXTENSION__ &&
middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__())

export default middlewares

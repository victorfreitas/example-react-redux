import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const middlewares = [applyMiddleware(thunk)]

/* eslint-disable no-underscore-dangle */
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}
/* eslint-enable */

export default middlewares

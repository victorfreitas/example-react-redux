import { createStore, compose } from 'redux'

import reducers from '../reducers'
import middlewares from './middlewares'

export default createStore(reducers, {}, compose(...middlewares))

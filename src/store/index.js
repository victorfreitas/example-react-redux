import { createStore, compose } from 'redux'

import reducers from 'src/reducers'
import middlewares from './middlewares'

export default createStore(reducers, {}, compose(...middlewares))

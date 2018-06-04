import { combineReducers } from 'redux'

import counters from './counters'
import address from './address'
import zipcode from './zipcode'
import isWait from './isWait'

export default combineReducers({
	counters,
	address,
  zipcode,
  isWait
})

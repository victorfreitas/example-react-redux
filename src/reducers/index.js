import { combineReducers } from 'redux'

import counters from './counters'
import address from './address'
import zipcode from './zipcode'

export default combineReducers({
	counters,
	address,
	zipcode
})

import {
	INCREMENT,
	DECREMENT,
	ADDRESS_CHANGED,
	CHANGE_ZIPCODE
} from '../constants/ActionTypes'

export const increment = payload => ({type: INCREMENT, payload})
export const decrement = payload => ({type: DECREMENT, payload})
export const changeZipCode = payload => ({type: CHANGE_ZIPCODE, payload})
export const changeAddress = payload => ({type: ADDRESS_CHANGED, payload})

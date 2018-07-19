import { CHANGE_ZIPCODE } from 'src/constants'

const sanitizeZipCodeBr = value => (
	value.replace(/[^\d]+/g, '').substring(0, 8)
)

export default (state = '', action) => {
	switch (action.type) {
		case CHANGE_ZIPCODE:
			return sanitizeZipCodeBr(action.payload)

		default:
			return state
	}
}

import { ADDRESS_CHANGED } from 'src/constants'

const initalState = {
	cep: '-',
	logradouro: '-',
	bairro: '-',
	localidade: '-',
	uf: '-'
}

export default (state = initalState, action) => {
	switch (action.type) {
		case ADDRESS_CHANGED:
			return action.payload

		default:
			return state
	}
}

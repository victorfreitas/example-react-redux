import axios from 'axios'

import { VIA_CEP_API } from '../constants/Apis'

export const getAddressByZipCode = zipCode => {
	const url = `${VIA_CEP_API}/${zipCode}/json`

	return axios.get(url)
		.then(response => response.data)
}

import axios from 'axios'

import { VIA_CEP_API } from '../constants/Apis'
import { formatZipCode } from '../helpers'

export const getAddressByZipCode = zipCode => {
	const url = `${VIA_CEP_API}/${zipCode}/json`

	return axios.get(url)
    .then(response => response.data)
    .then(data => {
      if (data.erro) {
        data.error = `Address not found for this ZIP Code: <strong>${formatZipCode(zipCode)}</strong>`
      }

      return data
    })
}

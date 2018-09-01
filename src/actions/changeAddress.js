import { ADDRESS_CHANGED, IS_WAIT } from 'src/constants'

import viaCepApi from 'src/environments/viaCepApi'
import { formatZipCode, checkResponse } from 'src/helpers'

class ChangeAddress {
  constructor(zipCode, dispatch) {
    this.zipCode = zipCode
    this.dispatch = dispatch

    this.dispatchIsWait(true)
    this.request()
  }

  dispatchIsWait(payload) {
    this.dispatch({
      type: IS_WAIT,
      payload,
    })
  }

  getApiUrl() {
    return `${viaCepApi}/${this.zipCode}/json`
  }

  request() {
    fetch(this.getApiUrl())
      .then(res => res.json())
      .then(checkResponse)
      .then(data => this.done(data))
      .catch(() => this.error())
  }

  done(data) {
    this.dispatchIsWait(false)
    this.dispatch({
      type: ADDRESS_CHANGED,
      payload: data,
    })
  }

  error() {
    this.dispatchIsWait(false)
    this.dispatch({
      type: ADDRESS_CHANGED,
      payload: { error: `Address not found for this zip code: (${formatZipCode(this.zipCode)})` },
    })
  }
}

export default zipCode => dispatch => new ChangeAddress(zipCode, dispatch)

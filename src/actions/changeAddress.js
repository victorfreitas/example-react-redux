import { ADDRESS_CHANGED, IS_WAIT } from '../constants'
import { viaCepApi } from '../environments'
import { formatZipCode } from '../helpers'

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
      payload
    })
  }

  getApiUrl() {
    return `${viaCepApi}/${this.zipCode}/json`
  }

  request() {
    fetch(this.getApiUrl())
      .then(res => res.json())
      .then(this._checkResponse)
      .then(data => this._done(data))
      .catch(() => this._error())
  }

  _checkResponse(response) {
    if (response.erro) {
      throw new Error()
    }

    return response
  }

  _done(data) {
    this.dispatchIsWait(false)
    this.dispatch({
      type: ADDRESS_CHANGED,
      payload: data
    })
  }

  _error() {
    this.dispatchIsWait(false)
    this.dispatch({
      type: ADDRESS_CHANGED,
      payload: {error: `Address not found for this zip code: (${formatZipCode(this.zipCode)})`}
    })
  }
}

export default zipCode => dispatch => (
  new ChangeAddress(zipCode, dispatch)
)

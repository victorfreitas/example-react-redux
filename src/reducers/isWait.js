import { IS_WAIT } from 'src/constants'

const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_WAIT:
      return action.payload

    default:
      return state
  }
}

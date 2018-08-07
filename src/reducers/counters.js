import { MAKE_COUNTERS } from 'src/constants'

export default (state = 0, action) => {
  switch (action.type) {
    case MAKE_COUNTERS:
      return state + action.payload

    default:
      return state
  }
}

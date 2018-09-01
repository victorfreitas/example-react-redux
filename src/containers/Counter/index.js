import { connect } from 'react-redux'

import Counter from 'src/components/Counter'
import { makeCounters } from 'src/actions'

const mapDispatchToProps = {
  makeCounters,
}

export default connect(null, mapDispatchToProps)(Counter)

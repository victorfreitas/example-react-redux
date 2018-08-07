import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Counter from 'src/components/Counter'
import { makeCounters } from 'src/actions'

const mapDispatchToProps = dispatch => (
  bindActionCreators({ makeCounters }, dispatch)
)

export default connect(null, mapDispatchToProps)(Counter)

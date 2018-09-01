import { connect } from 'react-redux'

import Counts from 'src/components/Counter/Counts'

const mapStateToProps = state => ({
  counts: state.counters,
})

export default connect(mapStateToProps)(Counts)

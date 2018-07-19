import { connect } from 'react-redux'

import ShowCounts from 'src/components/Counter/ShowCounts'

const mapStateToProps = state => ({
	counts: state.counters
})

export default connect(mapStateToProps)(ShowCounts)

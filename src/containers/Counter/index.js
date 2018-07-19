import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Counter from 'src/components/Counter'
import { increment, decrement } from 'src/actions'

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		increment,
		decrement
	}, dispatch)
)

export default connect(null, mapDispatchToProps)(Counter)

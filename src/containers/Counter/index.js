import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Counter from '../../components/Counter'
import { increment, decrement } from '../../actions'

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		increment,
		decrement
	}, dispatch)
)

export default connect(null, mapDispatchToProps)(Counter)

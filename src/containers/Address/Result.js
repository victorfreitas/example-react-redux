import { connect } from 'react-redux'

import Result from 'src/components/Address/Result'

const mapStateToProps = state => ({
  address: state.address,
})

export default connect(mapStateToProps)(Result)

import { connect } from 'react-redux'

import Info from 'src/components/Address/Info'

const mapStateToProps = state => ({
  address: state.address,
})

export default connect(mapStateToProps)(Info)

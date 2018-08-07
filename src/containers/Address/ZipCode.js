import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeZipCode, changeAddress } from 'src/actions'
import ZipCode from 'src/components/Address/ZipCode'

const mapStateToProps = state => ({
  value: state.zipcode,
  isWait: state.isWait,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    changeZipCode,
    changeAddress,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ZipCode)

import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeZipCode, changeAddress } from '../../actions'
import ZipCode from '../../components/Address/ZipCode'

const mapStateToProps = state => ({
	value: state.zipcode
})

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		changeZipCode,
		changeAddress
	}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ZipCode)

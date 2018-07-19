import React from 'react'

import ZipCode from 'src/containers/Address/ZipCode'
import Info from 'src/containers/Address/Info'

export default props => (
	<div className="address-content">
		<ZipCode />
		<Info />
	</div>
)

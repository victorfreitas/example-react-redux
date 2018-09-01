import React from 'react'
import PropTypes from 'prop-types'

import Items from './Items'

const Info = ({ address }) => (
  <div className="info">
    <Items addresses={Object.entries(address)} />
  </div>
)

Info.propTypes = {
  address: PropTypes.shape().isRequired,
}

export default Info

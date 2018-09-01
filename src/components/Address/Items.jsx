import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item'

const render = ([name, value]) => (
  <Item key={name} name={name} value={value} />
)
const Items = ({ addresses }) => addresses.map(render)

Items.propTypes = {
  addresses: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
}

export default Items

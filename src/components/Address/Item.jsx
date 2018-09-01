import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ name, value }) => (
  <p>
    <span>
      {name}
      {':'}
    </span>
    <strong>
      {value}
    </strong>
  </p>
)

Item.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Item

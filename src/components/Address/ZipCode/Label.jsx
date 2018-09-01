import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ value, change, disabled }) => (
  <label htmlFor="zipcode">
    CEP:
    <input
      type="number"
      id="zipcode"
      value={value}
      placeholder="Enter your ZIP Code"
      onChange={change}
      disabled={disabled}
    />
  </label>
)

Label.propTypes = {
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default Label

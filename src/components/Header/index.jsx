import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => (
  <h1 className="title">
    {title}
  </h1>
)

Header.defaultProps = {
  title: 'Example: React + Redux',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header

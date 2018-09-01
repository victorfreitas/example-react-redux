import React from 'react'
import PropTypes from 'prop-types'

import ErrorMessage from './ErrorMessage'
import Info from './Info'

const Result = ({ address }) => {
  if (address.error) {
    return <ErrorMessage message={address.error} />
  }

  return address.cep ? <Info address={address} /> : null
}

Result.propTypes = {
  address: PropTypes.shape({
    cep: PropTypes.string,
    error: PropTypes.string,
  }).isRequired,
}

export default Result

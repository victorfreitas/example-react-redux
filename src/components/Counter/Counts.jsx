import React from 'react'
import PropTypes from 'prop-types'

const Counts = ({ counts }) => (
  <span className="counts">
    Counter:
    <strong>
      {counts}
    </strong>
  </span>
)

Counts.propTypes = {
  counts: PropTypes.number.isRequired,
}

export default Counts

import React from 'react'
import PropTypes from 'prop-types'

const ShowCounts = ({ counts }) => (
  <span className="counts">
    Counter:
    <strong>
      {counts}
    </strong>
  </span>
)

ShowCounts.propTypes = {
  counts: PropTypes.number.isRequired,
}

export default ShowCounts

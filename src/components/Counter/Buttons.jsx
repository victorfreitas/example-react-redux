import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const Buttons = ({ list }) => (
  <div className="buttons">
    {list.map(({ text, click }) => (
      <Button key={text} text={text} click={click} />
    ))}
  </div>
)

Buttons.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      click: PropTypes.func.isRequired,
    })
  ).isRequired,
}

export default Buttons

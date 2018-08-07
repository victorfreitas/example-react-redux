import React from 'react'

import Counter from 'src/containers/Counter'
import Address from 'src/components/Address'
import Icons from 'src/components/Icons'

export default () => (
  <div className="container">
    <h1 className="title">
      React + Redux
    </h1>
    <Icons />
    <Counter />
    <Address />
  </div>
)

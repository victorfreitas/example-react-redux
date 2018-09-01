import React from 'react'

import icons from 'src/environments/iconsList'

const render = icon => <i key={icon} className={`icon icon-${icon}`} />
const Items = () => icons.map(render)

export default Items

import React from 'react'

import Counter from 'src/containers/Counter'
import Container from '../Container'
import Header from '../Header'
import Address from '../Address'
import Icons from '../Icons'

const App = () => (
  <Container>
    <Header />
    <Icons />
    <Counter />
    <Address />
  </Container>
)

export default App

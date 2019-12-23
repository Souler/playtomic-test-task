import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

function LoginLayout() {
  return (
    <Container>
      <span>Loading...</span>
    </Container>
  )
}

export default LoginLayout

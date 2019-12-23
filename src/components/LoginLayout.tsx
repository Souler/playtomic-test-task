import React from 'react'
import styled from 'styled-components'
import Login from './Login'

const Container = styled.section`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff9e3;
  background: linear-gradient(180deg, #fff9e3 0%, #ffffff 100%);
`

function LoginLayout() {
  return (
    <Container>
      <Login />
    </Container>
  )
}

export default LoginLayout

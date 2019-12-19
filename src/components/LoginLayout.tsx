import React from 'react';
import styled from 'styled-components';
import Login from './Login';

const FullScreen = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

function LoginLayout() {
  return (
    <FullScreen>
      <Login />
    </FullScreen>
  )
}

export default LoginLayout;
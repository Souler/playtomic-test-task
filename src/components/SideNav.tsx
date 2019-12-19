import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

function SideNav() {
  return (
    <Wrapper>
      <NavLink to="/dashboard" activeStyle={{ fontWeight: 'bold' }}>Dashboard</NavLink>
      <NavLink to="/settings" activeStyle={{ fontWeight: 'bold' }}>Settings</NavLink>
    </Wrapper>
  );
}

export default SideNav;

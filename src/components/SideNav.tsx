import React, { CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const LinkContent = styled.div`
  display: flex;
  padding: 8px 32px;
  flex-direction: row;
`
const IconPlaceholder = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.38);
  margin: 8px;
`;
const LinkText = styled.span`
  margin: 8px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.9rem;
`

const activeStyle: CSSProperties = {
  backgroundColor: '#fef9ea',
};

function SideNav() {
  return (
    <Container>
      <NavLink to="/dashboard" activeStyle={activeStyle}>
        <LinkContent>
          <IconPlaceholder />
          <LinkText>Dashboard</LinkText>
        </LinkContent>
      </NavLink>
      <NavLink to="/settings" activeStyle={activeStyle}>
        <LinkContent>
          <IconPlaceholder />
          <LinkText>Settings</LinkText>
        </LinkContent>
      </NavLink>
    </Container>
  );
}

export default SideNav;

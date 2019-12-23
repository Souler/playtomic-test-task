import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../store/actions';
import { getUserSafe } from '../store/selectors';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 40px;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  flex: 0;
  font-weight: bold;
  font-size: 1.1rem;
`;
const UserInfoWrapper = styled.div`
  display: flex;
  flex: 0;
  flex-direction: row;
  align-items: center;
`;
const UserInfoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  white-space: nowrap;
  margin: 4px;
`;
const ProfilePic = styled.img`
  border-radius: 20px;
  height: 20px;
  width: 20px;
  margin: 4px;
`;
const DisplayName = styled.span`
  font-weight: bold;
  opacity: 0.87;
  font-size: 0.9rem;
`;
const Role = styled.span`
  opacity: 0.54;
  font-size: 0.8rem;
  text-transform: capitalize;
`;

function Banner() {
  const user = useSelector(getUserSafe);
  const dispatch = useDispatch();
  const logout = useCallback(
    () => dispatch(logoutRequest()),
    [dispatch],
  );

  return (
    <Wrapper>
      <Logo>dashboard</Logo>
      <UserInfoWrapper onDoubleClick={logout} title="Double click to logout">
        <UserInfoText>
          <DisplayName>{user.displayName}</DisplayName>
          <Role>{user.role}</Role>
        </UserInfoText>
        <ProfilePic src={user.avatarUrl} alt={`${user.displayName} profile pic`} />
      </UserInfoWrapper>
    </Wrapper>
  )
}

export default Banner;
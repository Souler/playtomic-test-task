import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../store/actions';
import { getUserSafe } from '../store/selectors';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px;
`;
const Logo = styled.div`
  display: flex;
  flex: 0;
`;
const ProfilePic = styled.img`
  border-radius: 20px;
  height: 20px;
  width: 20px;
`;
const UserInfoWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
`;
const DisplayName = styled.span`
  font-wieght: bold;
  opacity: 0.87;
`;
const Role = styled.span`
  opacity: 0.54;
`;

function Banner() {
  const user = useSelector(getUserSafe);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Logo>Task dashboard</Logo>
      <UserInfoWrapper onDoubleClick={() => dispatch(logoutRequest())}>
        <ProfilePic src={user.avatarUrl} alt={`${user.displayName} profile pic`} />
        <DisplayName>{user.displayName}</DisplayName>
        <Role>{user.role}</Role>
      </UserInfoWrapper>
    </Wrapper>
  )
}

export default Banner;
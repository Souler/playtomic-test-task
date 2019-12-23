import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomString } from '../store/selectors';
import { fetchRandomStringRequest } from '../store/actions';
import DashboardContent from './DashboardContent';

function useRandomString() {
  const randomString = useSelector(getRandomString);
  const dispatch = useDispatch();
  useEffect(
    () => { dispatch(fetchRandomStringRequest()) },
    [dispatch],
  );
  return randomString;  
}

function Profile() {
  const randomString = useRandomString();

  return (
    <DashboardContent title="Secret dashboard">
      <code>{randomString}</code>
    </DashboardContent>
  );
}

export default Profile;

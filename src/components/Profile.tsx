import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomString } from '../store/selectors';
import { fetchRandomStringRequest } from '../store/actions';

function Profile() {
  const secretString = useSelector(getRandomString);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomStringRequest());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div>Profile</div>
      <code>{secretString}</code>
    </React.Fragment>
  );
}

export default Profile;


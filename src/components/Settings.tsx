import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSecretString } from '../store/selectors';
import { fetchSecretStringRequest } from '../store/actions';

function Settings() {
  const randomString = useSelector(getSecretString);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSecretStringRequest());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div>Settings</div>
      <code>{randomString}</code>
    </React.Fragment>
  );
}

export default Settings;

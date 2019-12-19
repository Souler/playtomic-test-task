import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Redirect } from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../lib/firebase';
import { isLoggedIn, isAuthReady } from '../store/selectors';

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: (...args: any[]) => false,
  }
};

function Login() {
  const location = useLocation();
  const authReady = useSelector(isAuthReady);
  const loggedIn = useSelector(isLoggedIn);
  const { from } = location.state || { from: { pathname: "/" } };

  return (
    <React.Fragment>
      {
        authReady
          ? loggedIn
            ? <Redirect to={from} />
            : <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          : null
      }
    </React.Fragment>
  );
}

export default Login;


import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { Redirect } from 'react-router-dom'
import firebase from '../lib/firebase'
import { isLoggedIn } from '../store/selectors'

const uiConfig = {
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: (...args: any[]) => false,
  },
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
}

function Login() {
  const location = useLocation()
  const loggedIn = useSelector(isLoggedIn)
  const { from } = location.state || { from: { pathname: '/' } }

  return (
    <React.Fragment>
      {loggedIn ? (
        <Redirect to={from} />
      ) : (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      )}
    </React.Fragment>
  )
}

export default Login

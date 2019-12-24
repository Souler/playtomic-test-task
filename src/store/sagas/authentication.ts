import { eventChannel } from 'redux-saga'
import { all, call, fork, put, take } from 'redux-saga/effects'
import firebase from '../../lib/firebase'
import { authReady, loginSuccess, logoutSuccess } from '../actions'
import { LOGOUT_REQUEST, User } from '../types'

/* FIXME: TypeScript swallows the typing after yields, why? */

function authStateEventChannel() {
  const firebaseUserToUser = (user: firebase.User) => ({
    avatarUrl: user.photoURL!,
    displayName: user.displayName!,
    email: user.email!,
    role: 'admin',
  })

  return eventChannel<{ user: User | null }>(emitter => {
    const unsub = firebase.auth().onAuthStateChanged(user => {
      const { email, emailVerified } = user || {}
      if (email && emailVerified) {
        emitter({ user: firebaseUserToUser(user!) })
      } else {
        emitter({ user: null })
      }
    })
    return unsub
  })
}

function* watchForAuthReady() {
  const authState = yield call(authStateEventChannel)
  yield take(authState)
  yield put(authReady())
}

function* watchForUserLoginStatus() {
  const authState = yield call(authStateEventChannel)
  while (true) {
    const { user } = yield take(authState)
    yield put(user ? loginSuccess(user) : logoutSuccess())
  }
}

function* logoutRequestHandler() {
  while (true) {
    yield take(LOGOUT_REQUEST)
    yield call([firebase.auth(), 'signOut'])
  }
}

function* authenticationSaga() {
  yield all([fork(watchForAuthReady), fork(watchForUserLoginStatus), fork(logoutRequestHandler)])
}

export default authenticationSaga

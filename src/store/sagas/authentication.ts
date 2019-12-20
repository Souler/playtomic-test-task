import { eventChannel } from 'redux-saga';
import { all, call, fork, put, take } from 'redux-saga/effects';
import firebase from '../../lib/firebase';
import { loginSuccess, logoutSuccess, authReady } from '../actions';
import { LOGOUT_REQUEST, User } from '../types';

function authStateEventChannel() {
  const firebaseUserToUser = (user: firebase.User) => ({
    email: user.email!,
    displayName: user.displayName!,
    avatarUrl: user.photoURL!,
    role: 'admin',
  });

  return eventChannel<{ user: User|null }>((emitter) => {
    const unsub = firebase.auth().onAuthStateChanged(user => {
      const { email, emailVerified } = user || {};
      if (email && emailVerified) {
        emitter({ user: firebaseUserToUser(user!) });
      } else {
        emitter({ user: null });
      }
    });
    return unsub;
  });
}

function* watchForAuthReady() {
  const authState = yield call(authStateEventChannel);
  yield take(authState);
  yield put(authReady());
}

function* watchForUserLoginStatus() {
  const authState = yield call(authStateEventChannel);
  while (true) {
    // FIXME: TypeScript swallows the typing after the yield, why?
    const { user } = yield take(authState);
    yield put(user ? loginSuccess(user) : logoutSuccess());
  }
}

function* logoutRequestHandler() {
  while (true) {
    // FIXME: TypeScript swallows the typing after the yield, why?
    yield take(LOGOUT_REQUEST);
    yield call([firebase.auth(), 'signOut']);
  }
}

function* authenticationSaga() {
  yield all([
    fork(watchForAuthReady),
    fork(watchForUserLoginStatus),
    fork(logoutRequestHandler),
  ])
}

export default authenticationSaga;

import {
  AuthActionTypes,
  AUTH_READY,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  User,
} from './types';

function authReady() {
  return {
    type: AUTH_READY,
  };
}

function loginSuccess(user: User): AuthActionTypes {
  return {
    type: LOGIN_SUCCESS as typeof LOGIN_SUCCESS,
    payload: { user },
  };
}

function logoutRequest(): AuthActionTypes {
  return {
    type: LOGOUT_REQUEST,
  };
}

function logoutSuccess(): AuthActionTypes {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export {
  authReady,
  loginSuccess,
  logoutRequest,
  logoutSuccess,
}

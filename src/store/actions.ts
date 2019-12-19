import {
  ActionTypes,
  AUTH_READY,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  User,
  FETCH_SECRET_STRING_REQUEST,
  FETCH_SECRET_STRING_SUCCESS,
  FETCH_SECRET_STRING_ERROR,
  FETCH_RANDOM_STRING_REQUEST,
  FETCH_RANDOM_STRING_SUCCESS,
  FETCH_RANDOM_STRING_ERROR,
} from './types';

function authReady() {
  return {
    type: AUTH_READY,
  };
}

function loginSuccess(user: User): ActionTypes {
  return {
    type: LOGIN_SUCCESS as typeof LOGIN_SUCCESS,
    payload: { user },
  };
}

function logoutRequest(): ActionTypes {
  return {
    type: LOGOUT_REQUEST,
  };
}

function logoutSuccess(): ActionTypes {
  return {
    type: LOGOUT_SUCCESS,
  };
}

function fetchSecretStringRequest(): ActionTypes {
  return {
    type: FETCH_SECRET_STRING_REQUEST,
  };
}

function fetchSecretStringSuccess(secretString: string): ActionTypes {
  return {
    type: FETCH_SECRET_STRING_SUCCESS,
    payload: { secretString }
  };
}

function fetchSecretStringError(error: Error): ActionTypes {
  return {
    type: FETCH_SECRET_STRING_ERROR,
    payload: { error }
  };
}

function fetchRandomStringRequest(): ActionTypes {
  return {
    type: FETCH_RANDOM_STRING_REQUEST,
  };
}

function fetchRandomStringSuccess(randomString: string): ActionTypes {
  return {
    type: FETCH_RANDOM_STRING_SUCCESS,
    payload: { randomString }
  };
}

function fetchRandomStringError(error: Error): ActionTypes {
  return {
    type: FETCH_RANDOM_STRING_ERROR,
    payload: { error }
  };
}

export {
  authReady,
  loginSuccess,
  logoutRequest,
  logoutSuccess,
  fetchSecretStringRequest,
  fetchSecretStringSuccess,
  fetchSecretStringError,
  fetchRandomStringRequest,
  fetchRandomStringSuccess,
  fetchRandomStringError,
}

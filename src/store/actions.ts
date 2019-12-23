import {
  ActionTypes,
  AUTH_READY,
  FETCH_RANDOM_STRING_ERROR,
  FETCH_RANDOM_STRING_REQUEST,
  FETCH_RANDOM_STRING_SUCCESS,
  FETCH_SECRET_STRING_ERROR,
  FETCH_SECRET_STRING_REQUEST,
  FETCH_SECRET_STRING_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  User,
} from './types'

function authReady() {
  return {
    type: AUTH_READY,
  }
}

function loginSuccess(user: User): ActionTypes {
  return {
    payload: { user },
    type: LOGIN_SUCCESS as typeof LOGIN_SUCCESS,
  }
}

function logoutRequest(): ActionTypes {
  return {
    type: LOGOUT_REQUEST,
  }
}

function logoutSuccess(): ActionTypes {
  return {
    type: LOGOUT_SUCCESS,
  }
}

function fetchSecretStringRequest(): ActionTypes {
  return {
    type: FETCH_SECRET_STRING_REQUEST,
  }
}

function fetchSecretStringSuccess(secretString: string): ActionTypes {
  return {
    payload: { secretString },
    type: FETCH_SECRET_STRING_SUCCESS,
  }
}

function fetchSecretStringError(error: Error): ActionTypes {
  return {
    payload: { error },
    type: FETCH_SECRET_STRING_ERROR,
  }
}

function fetchRandomStringRequest(): ActionTypes {
  return {
    type: FETCH_RANDOM_STRING_REQUEST,
  }
}

function fetchRandomStringSuccess(randomString: string): ActionTypes {
  return {
    payload: { randomString },
    type: FETCH_RANDOM_STRING_SUCCESS,
  }
}

function fetchRandomStringError(error: Error): ActionTypes {
  return {
    payload: { error },
    type: FETCH_RANDOM_STRING_ERROR,
  }
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

import {
  ActionTypes,
  AUTH_READY,
  FETCH_API_RESOURCE_ERROR,
  FETCH_API_RESOURCE_REQUEST,
  FETCH_API_RESOURCE_SUCCESS,
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

function fetchApiResourceRequest(resourceId: string, requestInfo: RequestInfo): ActionTypes {
  return {
    payload: { resourceId, requestInfo },
    type: FETCH_API_RESOURCE_REQUEST,
  }
}

function fetchApiResourceSuccess<T>(resourceId: string, data: T): ActionTypes {
  return {
    payload: { resourceId, data },
    type: FETCH_API_RESOURCE_SUCCESS,
  }
}

function fetchApiResourceError(resourceId: string, error: string): ActionTypes {
  return {
    payload: { resourceId, error },
    type: FETCH_API_RESOURCE_ERROR,
  }
}

export {
  authReady,
  loginSuccess,
  logoutRequest,
  logoutSuccess,
  fetchApiResourceRequest,
  fetchApiResourceSuccess,
  fetchApiResourceError,
}

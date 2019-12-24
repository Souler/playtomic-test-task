export interface User {
  email: string
  displayName: string
  avatarUrl: string
  role: string
}

export interface AuthState {
  user: User | null
  ready: boolean
}

export interface ApiResourceState<T = any> {
  data: T | undefined
  error: string | null
  loading: boolean
}

export type ApiDataState = Record<string, ApiResourceState | undefined>

export const AUTH_READY = 'AUTH_READY'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const FETCH_API_RESOURCE_REQUEST = 'FETCH_API_RESOURCE_REQUEST'
export const FETCH_API_RESOURCE_SUCCESS = 'FETCH_API_RESOURCE_SUCCESS'
export const FETCH_API_RESOURCE_ERROR = 'FETCH_API_RESOURCE_ERROR'

export interface AuthReadyAction {
  type: typeof AUTH_READY
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS
  payload: { user: User }
}

export interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST
}

export interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS
}

export interface FetchApiResourceRequestAction {
  type: typeof FETCH_API_RESOURCE_REQUEST
  payload: {
    resourceId: string
    requestInfo: RequestInfo
  }
}

export interface FetchApiResourceSuccessAction<T = any> {
  type: typeof FETCH_API_RESOURCE_SUCCESS
  payload: {
    resourceId: string
    data: T
  }
}

export interface FetchApiResourceErrorAction {
  type: typeof FETCH_API_RESOURCE_ERROR
  payload: {
    error: string
    resourceId: string
  }
}

export type ActionTypes =
  | AuthReadyAction
  | LoginSuccessAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | FetchApiResourceRequestAction
  | FetchApiResourceSuccessAction
  | FetchApiResourceErrorAction

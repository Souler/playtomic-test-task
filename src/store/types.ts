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

export interface ApiDataState {
  secretString: string
  randomString: string
}

export const AUTH_READY = 'AUTH_READY'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const FETCH_SECRET_STRING_REQUEST = 'FETCH_SECRET_STRING_REQUEST'
export const FETCH_SECRET_STRING_SUCCESS = 'FETCH_SECRET_STRING_SUCCESS'
export const FETCH_SECRET_STRING_ERROR = 'FETCH_SECRET_STRING_ERROR'
export const FETCH_RANDOM_STRING_REQUEST = 'FETCH_RANDOM_STRING_REQUEST'
export const FETCH_RANDOM_STRING_SUCCESS = 'FETCH_RANDOM_STRING_SUCCESS'
export const FETCH_RANDOM_STRING_ERROR = 'FETCH_RANDOM_STRING_ERROR'

interface AuthReadyAction {
  type: typeof AUTH_READY
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS
  payload: { user: User }
}

interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST
}

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS
}

interface FetchSecretStringRequestAction {
  type: typeof FETCH_SECRET_STRING_REQUEST
}

interface FetchSecretStringSuccessAction {
  type: typeof FETCH_SECRET_STRING_SUCCESS
  payload: { secretString: string }
}

interface FetchSecretStringErrorAction {
  type: typeof FETCH_SECRET_STRING_ERROR
  payload: { error: Error }
}

interface FetchRandomStringRequestAction {
  type: typeof FETCH_RANDOM_STRING_REQUEST
}

interface FetchRandomStringSuccessAction {
  type: typeof FETCH_RANDOM_STRING_SUCCESS
  payload: { randomString: string }
}

interface FetchRandomStringErrorAction {
  type: typeof FETCH_RANDOM_STRING_ERROR
  payload: { error: Error }
}

export type ActionTypes =
  | AuthReadyAction
  | LoginSuccessAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | FetchSecretStringRequestAction
  | FetchSecretStringSuccessAction
  | FetchSecretStringErrorAction
  | FetchRandomStringRequestAction
  | FetchRandomStringSuccessAction
  | FetchRandomStringErrorAction

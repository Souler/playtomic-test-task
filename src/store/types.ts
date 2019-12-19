export interface User {
  email: string,
  displayName: string,
  avatarUrl: string,
  role: string,
}

export type AuthState = {
  user: User | null,
  ready: Boolean,
};

export const AUTH_READY = 'AUTH_READY';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

interface AuthReadyAction {
  type: typeof AUTH_READY,
};
interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS,
  payload: { user: User },
};

interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST,
};

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS,
};

export type AuthActionTypes =
  AuthReadyAction |
  LoginSuccessAction |
  LogoutRequestAction |
  LogoutSuccessAction;

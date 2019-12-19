import {
  AuthState,
  ActionTypes,
  AUTH_READY,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../types';

const defaultState: AuthState = {
  user: null,
  ready: false,
};

function auth(state = defaultState, action: ActionTypes): AuthState {
  switch (action.type) {
    case AUTH_READY:
      return {
        ...state,
        ready: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export default auth;

import { ActionTypes, AUTH_READY, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../types';
import auth from './auth';

const defaultState = {
  user: null,
  ready: false,
};

test('returns a default state for an emtpy action and state', () => {
  expect(
    auth(undefined, {} as ActionTypes),
  ).toEqual(
    defaultState,
  );
});

test('returns the provided state for an unhandled action type', () => {
  expect(
    auth({
      ...defaultState,
      user: {
        avatarUrl: '#avatarUrl',
        displayName: '#displayName',
        email: '#email',
        role: '#role',
      },
    },
    {} as ActionTypes),
  ).toEqual({
    ...defaultState,
    user: {
      avatarUrl: '#avatarUrl',
      displayName: '#displayName',
      email: '#email',
      role: '#role',
    },
  });
});

test('[AUTH_READY] sets ready to true', () => {
  expect(
    auth(
      defaultState,
      {
        type: AUTH_READY,
      },
    ),
  ).toEqual({
    ...defaultState,
    ready: true,
  });
});

test('[LOGIN_SUCCESS] updates user with the user from the action', () => {
  expect(
    auth(
      defaultState,
      {
        type: LOGIN_SUCCESS,
        payload: {
          user: {
            avatarUrl: '#avatarUrl',
            displayName: '#displayName',
            email: '#email',
            role: '#role',
          },
        },
      },
    ),
  ).toEqual({
    ...defaultState,
    user: {
      avatarUrl: '#avatarUrl',
      displayName: '#displayName',
      email: '#email',
      role: '#role',
    },
  });
});

test('[LOGOUT_SUCCESS] sets user to null', () => {
  expect(
    auth(
      defaultState,
      {
        type: LOGOUT_SUCCESS,
      },
    ),
  ).toEqual({
    ...defaultState,
    user: null,
  });
});
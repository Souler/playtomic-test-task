import { DeepPartial } from 'redux';
import * as selectors from './selectors';
import { RootState } from './rootReducer';
import { User } from './types';

describe('isAuthReady', () => {
  test('returns true when state.auth.ready is true', () => {
    const state: DeepPartial<RootState> = { auth: { ready: true } };
    expect(selectors.isAuthReady(state as RootState)).toBe(true);
  });
  test('returns false when state.auth.ready is false', () => {
    const state: DeepPartial<RootState> = { auth: { ready: false } };
    expect(selectors.isAuthReady(state as RootState)).toBe(false);
  });
});

describe('isLoggedIn', () => {
  test('returns true when state.auth.ready is true and state.auth.user is truthy', () => {
    const state: DeepPartial<RootState> = { auth: { ready: true, user: {} as User } };
    expect(selectors.isLoggedIn(state as RootState)).toBe(true);
  });
  test('returns false when state.auth.ready is false', () => {
    const state: DeepPartial<RootState> = { auth: { ready: false } };
    expect(selectors.isLoggedIn(state as RootState)).toBe(false);
  });
  test('returns false when state.auth.user is null', () => {
    const state: DeepPartial<RootState> = { auth: { user: null } };
    expect(selectors.isLoggedIn(state as RootState)).toBe(false);
  });
});

describe('getUser', () => {
  test('returns state.auth.user when it is an object', () => {
    const user: Partial<User> = { displayName: 'testName', email: 'test@email.com' };
    const state: DeepPartial<RootState> = { auth: { user: user as User } };
    expect(selectors.getUser(state as RootState)).toEqual(user);
  });
  test('returns state.auth.user when it is null', () => {
    const state: DeepPartial<RootState> = { auth: { user: null } };
    expect(selectors.getUser(state as RootState)).toBe(null);
  });
});

describe('getUserSafe', () => {
  test('returns state.auth.user when it is an object', () => {
    const user: Partial<User> = { displayName: 'testName', email: 'test@email.com' };
    const state: DeepPartial<RootState> = { auth: { user: user as User } };
    expect(selectors.getUserSafe(state as RootState)).toEqual(user);
  });
  test('returns an empty object when state.auth.user is null', () => {
    const state: DeepPartial<RootState> = { auth: { user: null } };
    expect(selectors.getUserSafe(state as RootState)).toEqual({});
  });
});

describe('getSecretString', () => {
  test('returns state.apiData.seretString', () => {
    const state: DeepPartial<RootState> = { apiData: { secretString: 'foobar' } };
    expect(selectors.getSecretString(state as RootState)).toEqual('foobar');
  });
});

describe('getRandomString', () => {
  test('returns state.apiData.seretString', () => {
    const state: DeepPartial<RootState> = { apiData: { randomString: 'bazfoo' } };
    expect(selectors.getRandomString(state as RootState)).toEqual('bazfoo');
  });
});

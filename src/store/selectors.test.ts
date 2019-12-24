import { DeepPartial } from 'redux'
import { RootState } from './rootReducer'
import * as selectors from './selectors'
import { User } from './types'

describe('isAuthReady', () => {
  test('returns true when state.auth.ready is true', () => {
    const state: DeepPartial<RootState> = { auth: { ready: true } }
    expect(selectors.isAuthReady(state as RootState)).toBe(true)
  })
  test('returns false when state.auth.ready is false', () => {
    const state: DeepPartial<RootState> = { auth: { ready: false } }
    expect(selectors.isAuthReady(state as RootState)).toBe(false)
  })
})

describe('isLoggedIn', () => {
  test('returns true when state.auth.ready is true and state.auth.user is truthy', () => {
    const state: DeepPartial<RootState> = { auth: { ready: true, user: {} as User } }
    expect(selectors.isLoggedIn(state as RootState)).toBe(true)
  })
  test('returns false when state.auth.ready is false', () => {
    const state: DeepPartial<RootState> = { auth: { ready: false } }
    expect(selectors.isLoggedIn(state as RootState)).toBe(false)
  })
  test('returns false when state.auth.user is null', () => {
    const state: DeepPartial<RootState> = { auth: { user: null } }
    expect(selectors.isLoggedIn(state as RootState)).toBe(false)
  })
})

describe('getUser', () => {
  test('returns state.auth.user when it is an object', () => {
    const user: Partial<User> = { displayName: 'testName', email: 'test@email.com' }
    const state: DeepPartial<RootState> = { auth: { user: user as User } }
    expect(selectors.getUser(state as RootState)).toEqual(user)
  })
  test('returns state.auth.user when it is null', () => {
    const state: DeepPartial<RootState> = { auth: { user: null } }
    expect(selectors.getUser(state as RootState)).toBe(null)
  })
})

describe('getUserSafe', () => {
  test('returns state.auth.user when it is an object', () => {
    const user: Partial<User> = { displayName: 'testName', email: 'test@email.com' }
    const state: DeepPartial<RootState> = { auth: { user: user as User } }
    expect(selectors.getUserSafe(state as RootState)).toEqual(user)
  })
  test('returns an empty object when state.auth.user is null', () => {
    const state: DeepPartial<RootState> = { auth: { user: null } }
    expect(selectors.getUserSafe(state as RootState)).toEqual({})
  })
})

describe('getApiResource', () => {
  test('returns a function', () => {
    expect(typeof selectors.getApiResource('resource#1')).toBe('function')
  })
  test('returns null for an unkown specified resource', () => {
    const state: Partial<RootState> = {
      apiData: {
        'resource#1': {
          data: undefined,
          error: null,
          loading: true,
        },
      },
    }
    expect(selectors.getApiResource('resource#2')(state as RootState)).toBe(null)
  })
  test('returns the resource state for the provided resourceId', () => {
    const state: Partial<RootState> = {
      apiData: {
        'resource#1': {
          data: undefined,
          error: null,
          loading: true,
        },
      },
    }
    expect(selectors.getApiResource('resource#1')(state as RootState)).toEqual({
      data: undefined,
      error: null,
      loading: true,
    })
  })
})

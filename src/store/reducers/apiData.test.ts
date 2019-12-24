import {
  ActionTypes,
  FETCH_API_RESOURCE_ERROR,
  FETCH_API_RESOURCE_REQUEST,
  FETCH_API_RESOURCE_SUCCESS,
} from '../types'
import apiData from './apiData'

test('returns a default state for an emtpy action and state', () => {
  expect(apiData(undefined, {} as ActionTypes)).toEqual({})
})

test('returns the provided state as is for an unhandled action type', () => {
  const state = {
    'resource#1': {
      data: undefined,
      error: null,
      loading: true,
    },
  }
  expect(apiData(state, {} as ActionTypes)).toBe(state)
})

test("[FETCH_API_RESOURCE_REQUEST] returns the default resource state when it doesn't exist", () => {
  expect(
    apiData(
      {},
      {
        payload: {
          requestInfo: 'https://jsonplaceholder.typicode.com/users',
          resourceId: 'foo',
        },
        type: FETCH_API_RESOURCE_REQUEST,
      },
    ),
  ).toEqual({
    foo: {
      data: undefined,
      error: null,
      loading: true,
    },
  })
})

test('[FETCH_API_RESOURCE_REQUEST] overrides an existing resource state when already present', () => {
  expect(
    apiData(
      {
        foo: {
          data: { key: 'value' },
          error: null,
          loading: false,
        },
      },
      {
        payload: {
          requestInfo: 'https://jsonplaceholder.typicode.com/users',
          resourceId: 'foo',
        },
        type: FETCH_API_RESOURCE_REQUEST,
      },
    ),
  ).toEqual({
    foo: {
      data: undefined,
      error: null,
      loading: true,
    },
  })
})

test('[FETCH_API_RESOURCE_SUCCESS] returns the resource state with the action data', () => {
  expect(
    apiData(
      {},
      {
        payload: {
          data: { key: 'value' },
          resourceId: 'foo',
        },
        type: FETCH_API_RESOURCE_SUCCESS,
      },
    ),
  ).toEqual({
    foo: {
      data: { key: 'value' },
      error: null,
      loading: false,
    },
  })
})

test('[FETCH_API_RESOURCE_ERROR] returns the resource state with the error', () => {
  expect(
    apiData(
      {},
      {
        payload: {
          error: 'test error',
          resourceId: 'foo',
        },
        type: FETCH_API_RESOURCE_ERROR,
      },
    ),
  ).toEqual({
    foo: {
      data: undefined,
      error: 'test error',
      loading: false,
    },
  })
})

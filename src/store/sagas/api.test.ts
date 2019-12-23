import { all, call, delay, fork, put, take, takeLeading } from 'redux-saga/effects'
import secretApi from '../../lib/secretApi'
import {
  fetchRandomStringError,
  fetchRandomStringSuccess,
  fetchSecretStringError,
  fetchSecretStringSuccess,
} from '../actions'
import { FETCH_RANDOM_STRING_REQUEST, FETCH_SECRET_STRING_REQUEST } from '../types'
import api, {
  fetchRandomString,
  fetchSecretString,
  handleRandomStringRequest,
  handleSecretStringRequest,
} from './api'

test('forks the individual sagas and completes', async () => {
  const gen = api()
  expect(gen.next().value).toEqual(
    all([fork(handleRandomStringRequest), fork(handleSecretStringRequest)]),
  )
  expect(gen.next().done).toEqual(true)
})

describe('handleRandomStringRequest', () => {
  it('setups a nested saga for handling FETCH_RANDOM_STRING_REQUEST actions', () => {
    const gen = handleRandomStringRequest()
    expect(gen.next().value).toEqual(takeLeading(FETCH_RANDOM_STRING_REQUEST, fetchRandomString))
    expect(gen.next().done).toEqual(true)
  })
})

describe('handleSecretStringRequest', () => {
  it('setups a saga for handling the first FETCH_SECRET_STRING_REQUEST', () => {
    const gen = handleSecretStringRequest()
    expect(gen.next().value).toEqual(take(FETCH_SECRET_STRING_REQUEST))
    expect(gen.next().value).toEqual(call(fetchSecretString))
    expect(gen.next().done).toEqual(true)
  })
})

describe('fetchSecretString', () => {
  it('dispatches fetchSecretStringSuccess on success', () => {
    const gen = fetchSecretString()
    const secretString = 's3cret'
    expect(gen.next().value).toEqual(call([secretApi, 'fetchRandomString']))
    expect(gen.next(secretString).value).toEqual(put(fetchSecretStringSuccess(secretString)))
    expect(gen.next().done).toEqual(true)
  })
  it('dispatches fetchSecretStringError on error', () => {
    const gen = fetchSecretString()
    const error = new Error('testing error')
    expect(gen.next().value).toEqual(call([secretApi, 'fetchRandomString']))
    expect(gen.throw(error).value).toEqual(put(fetchSecretStringError(error)))
    expect(gen.next().done).toEqual(true)
  })
})

describe('fetchRandomString', () => {
  it('dispatches fetchRandomStringSuccess and sleeps for 10s on success', () => {
    const gen = fetchRandomString()
    const randomString = 's3cret'
    expect(gen.next().value).toEqual(call([secretApi, 'fetchRandomString']))
    expect(gen.next(randomString).value).toEqual(put(fetchRandomStringSuccess(randomString)))
    expect(gen.next().value).toEqual(delay(10000))
    expect(gen.next().done).toEqual(true)
  })
  it('dispatches fetchRandomStringError on error', () => {
    const gen = fetchRandomString()
    const error = new Error('testing error')
    expect(gen.next().value).toEqual(call([secretApi, 'fetchRandomString']))
    expect(gen.throw(error).value).toEqual(put(fetchRandomStringError(error)))
    expect(gen.next().done).toEqual(true)
  })
})

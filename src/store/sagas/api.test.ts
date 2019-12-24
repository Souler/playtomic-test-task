import { runSaga } from 'redux-saga'
import { expectSaga, testSaga } from 'redux-saga-test-plan'
import { all, call, cancel, delay, fork, put, select, takeEvery } from 'redux-saga/effects'
import { fetchApiResourceError, fetchApiResourceRequest, fetchApiResourceSuccess } from '../actions'
import { getApiResource } from '../selectors'
import { ActionTypes, FETCH_API_RESOURCE_REQUEST, FetchApiResourceRequestAction } from '../types'
import api, {
  fetchApiResource,
  fetchApiResourceIfNotInProgress,
  handleFetchApiResourceRequest,
} from './api'

// test('forks the individual sagas and completes', async () => {
//   return testSaga(api)
//     .next()
//     .all([fork(handleFetchApiResourceRequest)])
// })

describe('fetchApiResource', () => {
  test('dispatches fetchApiResourceSuccess on success', async () => {
    const fakeResourceId = 'resource#1'
    const fakeRequestInfo = 'https://jsonplaceholder.typicode.com/users'
    const fakeResource = { foo: 'bar' }
    const fakeResponse = new Response(JSON.stringify(fakeResource))

    return expectSaga(fetchApiResource, fakeResourceId, fakeRequestInfo)
      .provide([
        [call(fetch, fakeRequestInfo), fakeResponse],
        [call([fakeResponse, 'json']), fakeResource],
      ])
      .put(fetchApiResourceSuccess(fakeResourceId, fakeResource))
      .run()
  })

  test('dispatches fetchApiResourceError on error', () => {
    const fakeResourceId = 'resource#1'
    const fakeRequestInfo = 'https://jsonplaceholder.typicode.com/users'
    const fakeError = 'Error: this is a fake error message'

    return expectSaga(fetchApiResource, fakeResourceId, fakeRequestInfo)
      .provide([[call(fetch, fakeRequestInfo), Promise.reject(fakeError)]])
      .put(fetchApiResourceError(fakeResourceId, fakeError))
      .run()
  })
})

describe('fetchApiResourceIfNotInProgress', () => {
  test('calls fetchApiResource if it is not already in progress', () => {
    const fakeResourceId = 'resource#1'
    const fakeRequestInfo = 'https://jsonplaceholder.typicode.com/users'
    const fakeResourceState = { loading: false }
    const fakeResourceStateSelector = () => fakeResourceState

    testSaga(fetchApiResourceIfNotInProgress, fakeResourceId, fakeRequestInfo)
      .next()
      .call(getApiResource, fakeResourceId)
      .next(fakeResourceStateSelector)
      .select(fakeResourceStateSelector)
      .next(fakeResourceState)
      .call(fetchApiResource, fakeResourceId, fakeRequestInfo)
      .next()
      .isDone()
  })
  test('cancels if it is already in progress', () => {
    const fakeResourceId = 'resource#1'
    const fakeRequestInfo = 'https://jsonplaceholder.typicode.com/users'
    const fakeResourceState = { loading: true }
    const fakeResourceStateSelector = () => fakeResourceState

    testSaga(fetchApiResourceIfNotInProgress, fakeResourceId, fakeRequestInfo)
      .next()
      .call(getApiResource, fakeResourceId)
      .next(fakeResourceStateSelector)
      .select(fakeResourceStateSelector)
      .next(fakeResourceState)
      .isDone()
  })
})

describe('handleFetchApiResourceRequest', () => {
  test('calls fetchApiResourceIfNotInProgress with the action payload', () => {
    const fakeResourceId = 'resource#1'
    const fakeRequestInfo = 'https://jsonplaceholder.typicode.com/users'
    const fakeResourceRequestAction = fetchApiResourceRequest(
      fakeResourceId,
      fakeRequestInfo,
    ) as FetchApiResourceRequestAction

    testSaga(handleFetchApiResourceRequest, fakeResourceRequestAction)
      .next()
      .call(fetchApiResourceIfNotInProgress, fakeResourceId, fakeRequestInfo)
      .next()
      .isDone()
  })
})

describe('api saga', () => {
  test.skip('forks to other sagas', () => {
    return expectSaga(api).all([takeEvery('A', handleFetchApiResourceRequest)])
  })
})

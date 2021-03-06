import { expectSaga, testSaga } from 'redux-saga-test-plan'
import { call } from 'redux-saga/effects'
import { fetchApiResourceError, fetchApiResourceRequest, fetchApiResourceSuccess } from '../actions'
import { getApiResource } from '../selectors'
import { FetchApiResourceRequestAction } from '../types'
import api, {
  fetchApiResource,
  fetchApiResourceIfNotInProgress,
  handleFetchApiResourceRequest,
} from './api'

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
  test('calls fetchApiResource if resource is not already in progress', () => {
    const fakeResourceId = 'resource#1'
    const fakeRequestInfo = 'https://jsonplaceholder.typicode.com/users'

    testSaga(fetchApiResourceIfNotInProgress, fakeResourceId, fakeRequestInfo)
      .next()
      .call(fetchApiResource, fakeResourceId, fakeRequestInfo)
      .next()
      .isDone()
  })
  test('does nothing if resource is already in progress', () => {
    const fakeResourceId = 'resource#1'
    const fakeRequestInfo = 'https://jsonplaceholder.typicode.com/users'
    const fakeRequestProgressMap: Map<string, boolean> = new Map([[fakeResourceId, true]])

    testSaga(fetchApiResourceIfNotInProgress, fakeResourceId, fakeRequestInfo, {
      resourceInProgressById: fakeRequestProgressMap,
    })
      .next()
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
  test.todo('forks to other sagas')
})

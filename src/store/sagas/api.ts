import { call, put, takeLeading } from 'redux-saga/effects'
import { fetchApiResourceError, fetchApiResourceSuccess } from '../actions'
import { FETCH_API_RESOURCE_REQUEST, FetchApiResourceRequestAction } from '../types'

/* FIXME: TypeScript swallows the typing after yields, why? */

function* fetchApiResource(resourceId: string, requestInfo: RequestInfo) {
  try {
    const res: Response = yield call(fetch, requestInfo)
    const data = yield call([res, 'json'])
    yield put(fetchApiResourceSuccess(resourceId, data))
  } catch (err) {
    yield put(fetchApiResourceError(resourceId, err.message || err))
  }
}

function* fetchApiResourceIfNotInProgress(
  resourceId: string,
  requestInfo: RequestInfo,
  { resourceInProgressById = new Map() }: { resourceInProgressById?: Map<string, boolean> } = {},
) {
  const resourceInProgress = resourceInProgressById.get(resourceId)
  if (!resourceInProgress) {
    try {
      resourceInProgressById.set(resourceId, true)
      yield call(fetchApiResource, resourceId, requestInfo)
    } finally {
      resourceInProgressById.set(resourceId, false)
    }
  }
}

function* handleFetchApiResourceRequest(action: FetchApiResourceRequestAction) {
  const { resourceId, requestInfo } = action.payload
  yield call(fetchApiResourceIfNotInProgress, resourceId, requestInfo)
}

function* apiSaga() {
  yield takeLeading(FETCH_API_RESOURCE_REQUEST, handleFetchApiResourceRequest)
}

export default apiSaga
export { fetchApiResource, fetchApiResourceIfNotInProgress, handleFetchApiResourceRequest }

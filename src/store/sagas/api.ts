import { all, call, put, select, takeLeading } from 'redux-saga/effects'
import { fetchApiResourceError, fetchApiResourceSuccess } from '../actions'
import { getApiResource } from '../selectors'
import {
  ApiResourceState,
  FETCH_API_RESOURCE_REQUEST,
  FetchApiResourceRequestAction,
} from '../types'

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

function* fetchApiResourceIfNotInProgress(resourceId: string, requestInfo: RequestInfo) {
  const resourceStateSelector = yield call(getApiResource, resourceId)
  const resourceState: ApiResourceState | null = yield select(resourceStateSelector)
  if (!resourceState || !resourceState.loading) {
    yield call(fetchApiResource, resourceId, requestInfo)
  }
}

function* handleFetchApiResourceRequest(action: FetchApiResourceRequestAction) {
  const { resourceId, requestInfo } = action.payload
  yield call(fetchApiResourceIfNotInProgress, resourceId, requestInfo)
}

function* apiSaga() {
  yield all([takeLeading(FETCH_API_RESOURCE_REQUEST, handleFetchApiResourceRequest)])
}

export default apiSaga
export { fetchApiResource, fetchApiResourceIfNotInProgress, handleFetchApiResourceRequest }

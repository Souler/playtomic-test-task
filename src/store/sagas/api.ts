import { all, call, fork, put, take, delay, takeLeading } from 'redux-saga/effects';
import { FETCH_RANDOM_STRING_REQUEST, FETCH_SECRET_STRING_REQUEST } from "../types";
import secretApi from '../../lib/secretApi';
import {
  fetchRandomStringError,
  fetchRandomStringSuccess,
  fetchSecretStringError,
  fetchSecretStringSuccess,
} from '../actions';

function* fetchSecretString() {
  try {
    const secretString = yield call([secretApi, 'fetchRandomString']);
    yield put(fetchSecretStringSuccess(secretString));
  } catch (e) {
    yield put(fetchSecretStringError(e));
  }
}

function* fetchRandomString() {
  try {
    const randomString = yield call([secretApi, 'fetchRandomString']);
    yield put(fetchRandomStringSuccess(randomString));
    // "Cache" the value for 10 seconds
    yield delay(10000);
  } catch (e) {
    yield put(fetchRandomStringError(e));
  }
}

function* handleSecretStringRequest() {
  yield take(FETCH_SECRET_STRING_REQUEST);
  yield call(fetchSecretString);
}

function* handleRandomStringRequest() {
  yield takeLeading(FETCH_RANDOM_STRING_REQUEST, fetchRandomString);
}

function* apiSaga() {
  yield all([
    fork(handleRandomStringRequest),
    fork(handleSecretStringRequest),
  ]);
}

export default apiSaga;
export {
  fetchSecretString,
  fetchRandomString,
  handleSecretStringRequest,
  handleRandomStringRequest,
}
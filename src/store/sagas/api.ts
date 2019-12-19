import { all, call, put, take, delay } from 'redux-saga/effects';
import { FETCH_RANDOM_STRING_REQUEST, FETCH_SECRET_STRING_REQUEST } from "../types";
import secretApi from '../../lib/secretApi';
import {
  fetchRandomStringError,
  fetchRandomStringSuccess,
  fetchSecretStringError,
  fetchSecretStringSuccess,
} from '../actions';

function* handleSecretStringRequest() {
  while (true) {
    yield take(FETCH_SECRET_STRING_REQUEST);
    try {
      const secretString = yield call([secretApi, 'fetchRandomString']);
      yield put(fetchSecretStringSuccess(secretString));
    } catch(e) {
      yield put(fetchSecretStringError(e));
    }
    yield delay(10000);
  }
}

function* handleRandomStringRequest() {
  while (true) {
    yield take(FETCH_RANDOM_STRING_REQUEST);
    try {
      const randomString = yield call([secretApi, 'fetchRandomString']);
      yield put(fetchRandomStringSuccess(randomString));
    } catch(e) {
      yield put(fetchRandomStringError(e));
    }
    yield delay(10000);
  }
}

function* apiSaga() {
  yield all([
    call(handleRandomStringRequest),
    call(handleSecretStringRequest),
  ]);
}

export default apiSaga;

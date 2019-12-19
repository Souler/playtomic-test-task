import { all, call } from 'redux-saga/effects';
import api from './sagas/api';
import authentication from './sagas/authentication';

function* rootSaga() {
  yield all([
    call(api),
    call(authentication),
  ]);
}

export default rootSaga;

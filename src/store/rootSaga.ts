import { all, call } from 'redux-saga/effects';
import authentication from './sagas/authentication';

function* rootSaga() {
  yield all([
    call(authentication),
  ]);
}

export default rootSaga;

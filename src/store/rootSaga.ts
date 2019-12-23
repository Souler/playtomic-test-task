import { all, spawn } from 'redux-saga/effects'
import api from './sagas/api'
import authentication from './sagas/authentication'

function* rootSaga() {
  yield all([spawn(api), spawn(authentication)])
}

export default rootSaga

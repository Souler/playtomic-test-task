import { all, spawn } from 'redux-saga/effects'
import rootSaga from './rootSaga'
import api from './sagas/api'
import authentication from './sagas/authentication'

test('spawns the individual sagas and completes', async () => {
  const gen = rootSaga()
  expect(gen.next().value).toEqual(all([spawn(api), spawn(authentication)]))
  expect(gen.next().done).toEqual(true)
})

import { createStore } from 'redux'
import apiData from './reducers/apiData'
import auth from './reducers/auth'
import rootReducer from './rootReducer'
import { ActionTypes } from './types'

test('initial state derives from combined reducers', () => {
  const store = createStore(rootReducer)

  expect(store.getState()).toEqual({
    apiData: apiData(undefined, {} as ActionTypes),
    auth: auth(undefined, {} as ActionTypes),
  })
})

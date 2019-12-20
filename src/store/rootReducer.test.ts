import { createStore } from 'redux';
import rootReducer from './rootReducer';
import auth from './reducers/auth';
import apiData from './reducers/apiData';
import { ActionTypes } from './types';

test('initial state derives from combined reducers', () => {
  const store = createStore(rootReducer);

  expect(store.getState()).toEqual({
    auth: auth(undefined, {} as ActionTypes),
    apiData: apiData(undefined, {} as ActionTypes),
  });
});

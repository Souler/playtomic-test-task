import { combineReducers } from 'redux';
import apiData from './reducers/apiData';
import auth from './reducers/auth';

const rootReducer = combineReducers({
  apiData,
  auth,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

import {
  ActionTypes,
  ApiDataState,
  FETCH_RANDOM_STRING_SUCCESS,
  FETCH_SECRET_STRING_SUCCESS,
} from '../types'

const defaultState: ApiDataState = {
  randomString: '',
  secretString: '',
}

function apiData(state = defaultState, action: ActionTypes): ApiDataState {
  switch (action.type) {
    case FETCH_RANDOM_STRING_SUCCESS:
      return {
        ...state,
        randomString: action.payload.randomString,
      }
    case FETCH_SECRET_STRING_SUCCESS:
      return {
        ...state,
        secretString: action.payload.secretString,
      }
    default:
      return state
  }
}

export default apiData

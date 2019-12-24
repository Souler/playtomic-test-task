import {
  ActionTypes,
  ApiDataState,
  FETCH_API_RESOURCE_ERROR,
  FETCH_API_RESOURCE_REQUEST,
  FETCH_API_RESOURCE_SUCCESS,
} from '../types'

const defaultState: ApiDataState = {}

function apiData(state = defaultState, action: ActionTypes): ApiDataState {
  switch (action.type) {
    case FETCH_API_RESOURCE_REQUEST:
      return {
        ...state,
        [action.payload.resourceId]: {
          data: undefined,
          error: null,
          loading: true,
        },
      }
    case FETCH_API_RESOURCE_SUCCESS:
      return {
        ...state,
        [action.payload.resourceId]: {
          data: action.payload.data,
          error: null,
          loading: false,
        },
      }
    case FETCH_API_RESOURCE_ERROR:
      return {
        ...state,
        [action.payload.resourceId]: {
          data: undefined,
          error: action.payload.error,
          loading: false,
        },
      }
    default:
      return state
  }
}

export default apiData

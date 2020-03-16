import {
  SET_ERROR,
  SET_IS_LOADING,
  FETCH_JOBS_SUCCESSFUL,
  FETCH_JOBS_EMPTY,
  SET_KEYWORD
} from '../actionTypes'

const initialState = {
  isLoading: false,
  errorMessage: '',
  keyword: '',
  hotJobs: ['PHP', 'Rails', 'Python']
}

export function statusReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage
      }
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.keyword
      }
    default:
      return state
  }
}

const initialJobs = []

export function jobReducer(state = initialJobs, action) {
  switch (action.type) {
    case FETCH_JOBS_SUCCESSFUL:
      return [...state, ...action.jobs]
    case FETCH_JOBS_EMPTY:
      return []
    default:
      return state
  }
}
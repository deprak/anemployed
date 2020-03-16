import { 
  SET_IS_LOADING,
  SET_ERROR,
  FETCH_JOBS_SUCCESSFUL,
  FETCH_JOBS_EMPTY,
  SET_KEYWORD
} from '../actionTypes'
import axios from 'axios'


export function setError (errorMessage) {
  return {
    type: SET_ERROR,
    errorMessage
  }
}

export function setIsLoading (isLoading) {
  return {
    type: SET_IS_LOADING,
    isLoading
  }
}

export function fetchJobsSuccessful (jobs) {
  return {
    type: FETCH_JOBS_SUCCESSFUL,
    jobs
  }
}

export function fetchJobsEmpty () { 
  return {
    type: FETCH_JOBS_EMPTY
  }
}

export function setKeyword (keyword) {
  return {
    type: SET_KEYWORD,
    keyword
  }
}
     
export function fetchJobs (jobQuery = 'javascript', page = 1) {
  return function (dispatch) {
    dispatch(setKeyword(jobQuery))
    function innerFetchJobs() {
      dispatch(setIsLoading(true))
      let url = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${jobQuery}&page=${page}`
      axios({
        method: 'get',
        url
      })
        .then(({ data }) => {
          if (data.length > 0) {
            page++
            dispatch(fetchJobsSuccessful(data))
            innerFetchJobs(jobQuery, page)
          } else if (page === 1 && data.length === 0) {
            dispatch(fetchJobsEmpty())
            dispatch(setIsLoading(false))
          } else {
            dispatch(setIsLoading(false))
          }
        })
        .catch(({ response }) => {
          dispatch(setIsLoading(false))
          dispatch(setError(response.statusText))
        })
    }
    innerFetchJobs()
  }
}
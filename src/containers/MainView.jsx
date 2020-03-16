import React, { useEffect } from 'react'
import SearchBox from '../components/SearchBox'
import JobView from '../components/JobView'
import TextInfo from '../components/TextInfo'
import StatusImage from '../components/StatusImage'
import { useSelector, useDispatch } from 'react-redux'
import { fetchJobs, fetchJobsEmpty, setKeyword } from '../store/actions'
import { Link } from 'react-router-dom'

function MainView() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJobsEmpty())
    dispatch(fetchJobs())
    dispatch(setKeyword(''))
  }, [dispatch])

  return (
    <div className="container max-w-4xl mx-auto">
      <SearchBox />
      <div className="flex justify-between items-center">
        <TextInfo />
        <Link to="/hot" className="text-blue-500 underline">Hot Searches</Link>
      </div>
      { state.status.isLoading 
        ? <StatusImage />
        : state.status.errorMessage
          ? <StatusImage />
          : state.jobs.length === 0
            ? <StatusImage />
            : <JobView jobList={state.jobs}/>  
      }   
    </div>
  )
}


export default MainView
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StatusImage from './StatusImage'
import JobInfo from './JobInfo'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setIsLoading, setError } from '../store/actions'
function DetailPage() {

  const [job, setJob] = useState({})
  const params = useParams()
  const status = useSelector(state => state.status)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(setIsLoading(true))
    axios({
      method: 'get',
      url: `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${params.id}.json`
    })
      .then(({ data }) => {
        dispatch(setIsLoading(false))
        setJob(data)
      })
      .catch(({ response }) => {
        dispatch(setIsLoading(false))
        dispatch(setError(response.statusText))
      })
    },
    [dispatch, params.id]
  )

  return (
    <div className="container max-w-4xl mx-auto mt-20 mb-5">
    {
      status.isLoading
      ? <StatusImage />
      : status.error
        ? <StatusImage />
        : <JobInfo job={job} />
    }
    </div>
  )


}

export default DetailPage
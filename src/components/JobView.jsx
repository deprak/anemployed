import React from 'react'
import JobCard from './JobCard'

function JobList(props) {
  return (
    <div className="rounded">
      {
        props.jobList.map(job => {
          return <JobCard job={job} key={job.id}/>
        })
      }
    </div>
  )
}


export default JobList
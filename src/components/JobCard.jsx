import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/JobCard.css'

function JobCard(props) {
  const history = useHistory()

  function daysPublished() {
    return (new Date(props.job.created_at)).toLocaleDateString()
  }

  function handleClick() {
    history.push(`/jobs/${props.job.id}`)
  }

  return (
    <div
      onClick={handleClick}
      className="job-card cursor-pointer hover:bg-gray-100 flex p-4 mb-4 rounded border border-b shadow-md">
      <div className="flex flex-col w-2/3 text-left">
        <h3 className="text-blue-700 font-bold text-lg">{props.job.title}</h3>
        <div className="text-sm">
          <span className="text-gray-500">{props.job.company} - </span>
          <span className="text-green-500 font-bold">{props.job.type}</span>
        </div>
      </div>
      <div className="flex flex-col w-1/3 text-right justify-between">
        <span className="text-sm text-gray-600">{props.job.location}</span>
        <span className="text-sm text-gray-500">{daysPublished()}</span>
      </div>
    </div>
  )
}

export default JobCard
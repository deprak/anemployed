import React from 'react'
import renderHTML from 'react-render-html'
import '../styles/JobInfo.css'

function JobInfo(props) {
  const job = props.job

  return (
    <div className="mx-auto border shadow-lg rounded p-8 text-left">
      <div className="flex justify-between">
        <div>
          <span className="text-sm text-gray-500">{job.type}</span>
          <h3 className="text-lg font-bold text-gray-700 mb-2">{job.title}</h3>
        </div>
        <div className="w-24 mb-2">
          <img src={job.company_logo} alt="company logo"/>
        </div>
      </div>
      <hr className="mb-2"/>
      <div>
        {renderHTML(`${job.description}`)}
      </div>
    </div>
  )
}


export default JobInfo


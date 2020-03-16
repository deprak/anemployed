import React from 'react'
import HotBox from '../components/HotBox'
import JobView from '../components/JobView'
import StatusImage from '../components/StatusImage'
import { useSelector } from 'react-redux'
import TextInfo from '../components/TextInfo'

function MainView(props) {
  const state = useSelector(state => state)

  return (
    <div className="container max-w-4xl mx-auto">
      <HotBox />
      <div className="flex justify-between items-center">
        <TextInfo />
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
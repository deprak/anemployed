import React from 'react'
import { useSelector } from 'react-redux'

function FeaturedJob(props) {
  const keyword = useSelector(state => state.status.keyword)
  let info = ''
  if (!keyword) {
    info = 'Featured Job: JavaScript'
  } else {
    info = `You searched for: ${keyword}`
  }
  return (
    <div className="text-left py-2">
      <h3 className="font-bold text-lg text-gray-700">{info}</h3>
    </div>
  )
}

export default FeaturedJob
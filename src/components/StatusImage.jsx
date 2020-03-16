import React from 'react'
import loadingImage from '../assets/loading_image.svg'
import warningImage from '../assets/warning.svg'
import noResultImage from '../assets/no_result.svg'
import { useSelector } from 'react-redux'
import '../styles/StatusImage.css'

function LoadingImage() {
  const state = useSelector(state => state)
  let image, msg;
  if (state.status.isLoading) {
    image = loadingImage
    msg = 'Loading...'
  } else if (state.status.errorMessage) {
    image = warningImage
    msg = state.status.errorMessage
  } else {
    image = noResultImage
    msg = 'Sorry, but nothing matched your search terms'
  }
  return (
    <div className="w-2/5 flex mx-auto my-2 flex flex-col">
      <img src={image} alt="loading"/>
      <span className={`text-center font-bold text-lg my-2 text-gray-800 ${state.status.isLoading ? "text-status" : ""}`}>
        {msg}
      </span>
    </div>
  )
}

export default LoadingImage
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <div className="h-12 w-full text-center fixed top-0 z-30 bg-blue-300">
      <div className="flex justify-between">
        <Link to="/" className="text-xl text-left p-2 block cursor-pointer font-bold text-white">AnEmployed</Link>
        {
          props.user
          ? (
            <div className="mr-2 w-20 flex h-10 mt-1 rounded text-center">
              <button 
                onClick={props.signOut}
                className="p-1 text-sm w-full border rounded font-bold text-white text-center hover:bg-blue-400">
                Log out
              </button>
            </div>
          )
          : <div></div>
        }
      </div>
    </div>
  )
}

export default Navbar
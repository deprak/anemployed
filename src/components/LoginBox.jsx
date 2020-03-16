import React from 'react'

export default function LoginBox(props) {
  return (
    <div className="w-64 mx-auto border mt-20 mb-4 shadow-lg rounded p-2">
      <div>
        <h3 className="font-bold text-gray-700 mb-2">You must login first to see hot searches</h3>
        <div className="flex text-center">
          <div className="mx-auto flex">
            <button
              className="border shadow py-2 px-3 rounded"
              onClick={props.signInWithGoogle}
              >
              Log in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
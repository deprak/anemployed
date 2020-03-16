import React from 'react'
import LoginBox from '../components/LoginBox'
import { Redirect } from 'react-router-dom'

function Login(props) {
  return (
    props.user
      ? <Redirect to="/hot" />
      : <LoginBox {...props}/>
  )
}

export default Login
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute(props) {
  return (
    <Route {...props}>
      {
        props.user
          ? props.children
          : <Redirect to="/login"/>
      }
    </Route>
  )
}
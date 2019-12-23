import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { isLoggedIn } from '../store/selectors'

function PrivateRoute(props: RouteProps) {
  const { children, ...otherProps } = props
  const loggedIn = useSelector(isLoggedIn)
  const render = useCallback(
    ({ location }) =>
      loggedIn ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />,
    [loggedIn, children],
  )

  return <Route {...otherProps} render={render} />
}

export default PrivateRoute

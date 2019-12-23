import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { isAuthReady } from '../store/selectors'
import AppLoading from './AppLoading'
import DashboardLayout from './DashboardLayout'
import LoginLayout from './LoginLayout'
import PrivateRoute from './PrivateRoute'
import Profile from './Profile'
import Settings from './Settings'

function AppRouter() {
  const authReady = useSelector(isAuthReady)

  if (!authReady) {
    return <AppLoading />
  }

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/login">
          <LoginLayout />
        </Route>
        <Route path="*">
          <DashboardLayout>
            <Switch>
              <PrivateRoute exact={true} path="/dashboard">
                <Profile />
              </PrivateRoute>
              <PrivateRoute exact={true} path="/settings">
                <Settings />
              </PrivateRoute>
              <Route path="*">
                <Redirect to="/dashboard" />
              </Route>
            </Switch>
          </DashboardLayout>
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter

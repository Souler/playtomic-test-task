import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';
import DashboardLayout from './DashboardLayout';
import LoginLayout from './LoginLayout';
import PrivateRoute from './PrivateRoute';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginLayout />
        </Route>
        <Route path="*">
          <DashboardLayout>
            <Switch>
              <PrivateRoute exact path="/dashboard">
                <Profile />
              </PrivateRoute>
              <PrivateRoute exact path="/settings">
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

export default AppRouter;
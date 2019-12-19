import React from 'react';
import { useSelector } from 'react-redux';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../store/selectors';

function PrivateRoute(props: RouteProps) {
  const { children, ...otherProps } = props;
  const loggedIn = useSelector(isLoggedIn);

  return (
    <Route
      {...otherProps}
      render={({ location }) =>
        // FIXME: Use state
        loggedIn
          ? children
          : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default PrivateRoute;

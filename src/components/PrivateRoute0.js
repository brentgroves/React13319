import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ bpgservices,component: Component, ...rest }) {
let message=bpgservices;
  return (
    <Route
      {...rest}
      render={props =>
        message.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;

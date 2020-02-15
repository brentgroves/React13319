import React from "react";
import { Route, Redirect } from "react-router-dom";


function AdminRoute({ isAdmin,component: Component, ...rest }) {
//let message=bpgservices;
//App will be null until feathers has a chance to authenticate
/*
if(null != message.app){
message.app.reAuthenticate().then(() => {
  // show application page
  isAuthenticated=true;
}).catch(() => {
isAuthenticated=false;
});
}
*/
/*
message.reAuthenticate().then(() => {
  // show application page
  <Component {...props} />
}).catch(() => {
  <Redirect to="/login" />
});
}
*/
  return (
    <Route
      {...rest}
      render={props =>
        isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default AdminRoute;

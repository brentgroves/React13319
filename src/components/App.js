
import * as AppSet from '../constants/AppSet';
import { OEEApp } from '../containers/OEE/App';
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import clsx from "clsx";


export default function App({
  appSet,
  isAuthenticated,
  isAdmin,
  pathname,
  Push,
  Logout,
  ClearAppError,
  appError,
  openDialog200206,
  Submitting,
  submitting
}) {
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    if (!isAuthenticated) {
      Push("login");
    }
  });

  return (
    <div >
    {appSet==AppSet.BPG && (
      <OEEApp/>
    )}
    {appSet==AppSet.HOME && (
      <OEEApp/>
    )}
    </div>
    );
}

//export default Dashboard

/*
const App = (props) => {
  const {firstName} = props
  return (
      <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
      </Switch>

  )

}
export default App
*/

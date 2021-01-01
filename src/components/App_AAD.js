import React, { useEffect } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import { OEE } from '../containers/OEE/App';
import { CNC } from '../containers/CNC/App';
import { Profit } from '../containers/Profit/App';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import { LaunchMenu } from '../containers/LaunchMenu';
import { SignIn } from '../containers/SignIn';
import LinearIndeterminate from './LinearIndeterminate';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useAccount,useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "../config/authConfig";

// <CssBaseLine /> seems to work instead of creating a <div className = 'root'>
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }

}));

export default function App({
  appSet,
  currentApp,
  ClearAppError,
  appError,
  isAuthenticated,
  Push,
}) {

  const classes = useStyles();
  const { instance } = useMsal();
  const isAuthenticatedAAD = useIsAuthenticated();
  const handleSignOut = event => {
    alert('Sign Out');
    instance.logout();
    // instance.loginRedirect(loginRequest);
  };
  const handleSignIn = event => {
    alert('Sign In');
    instance.loginRedirect(loginRequest);
    // instance.loginRedirect(loginRequest);
  };

  return (
    <React.Fragment>
    {isAuthenticatedAAD && (
      <React.Fragment >
      <CssBaseline />
      <Switch>
        <Route path="/oee">
          <OEE />
        </Route>
        <Route path="/cnc">
          <CNC />
        </Route>
        <Route path="/profit">
          <Profit />
        </Route>
        <Route exact path="/transition" component={LinearIndeterminate} />
        <Route exact path="/" component={LaunchMenu} />
      </Switch>
      </React.Fragment>
   )}
      {!isAuthenticatedAAD && (
          <SignIn />
      )}

   </React.Fragment>
  );
}



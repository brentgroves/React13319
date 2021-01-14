import React, { useEffect,useState } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import { OEE } from '../containers/OEE/App';
import { CNC } from '../containers/CNC/App';
import { Profit } from '../containers/Profit/App';
import { ProfileContent } from '../containers/ProfileContent'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import { LaunchMenu } from '../containers/LaunchMenu';
import { SignIn } from '../containers/SignIn';
import LinearIndeterminate from './LinearIndeterminate';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { MsalProvider, MsalAuthenticationTemplate, UnauthenticatedTemplate, useMsal, useAccount } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "../config/authConfig";
import { ErrorBoundary } from "./ErrorBoundary.jsx";
import { ProfileData, callMsGraph } from "./graph.jsx";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }

}));

/*
const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [graphData, setGraphData] = useState(null);

  function RequestProfileData() {
      instance.acquireTokenSilent({
          ...loginRequest,
          account: account
      }).then((response) => {
          callMsGraph(response.accessToken).then(response => setGraphData(response));
      });
  }

  return (
      <>
          <h5 className="card-title">Welcome {account && account.name}</h5>
          {graphData ? 
              <ProfileData graphData={graphData} />
              :
              <Button onClick={RequestProfileData}>Request Profile Information</Button>
          }
      </>
  );
};
*/
/*
const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [graphData, setGraphData] = useState(null);
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    // if (!isAuthenticated) {
    //   Push('/login');
    // }
    instance.acquireTokenSilent({
      ...loginRequest,
      account: account
    }).then((response) => {
        callMsGraph(response.accessToken).then(response => setGraphData(response));
    });

  });

  function RequestProfileData() {
      instance.acquireTokenSilent({
          ...loginRequest,
          account: account
      }).then((response) => {
          callMsGraph(response.accessToken).then(response => setGraphData(response));
      });
  }

  return (
      <>
          <h5 className="card-title">Welcome {account && account.name}</h5>
      </>
  );
};
*/
const InProgressComponent = ({inProgress}) => {
  return <h5>{inProgress} In Progress</h5>;
}

const ErrorComponent = ({error}) => {
  return <h5>This is a protected page and the following error occurred during authentication: <strong>{error.errorCode}</strong></h5>;
}

/* 
Describes an alternate way to do this.
https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md#useaccount-hook
*/
export default function App({
  msalInstance,
  SetAccount,
  SetGraph,
  appSet,
  currentApp,
  ClearAppError,
  appError,
  isAuthenticated,
  Push,
}) {

  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    // if (!isAuthenticated) {
    //   Push('/login');
    // }
  });
  const handleClose = (event, reason) => {
    ClearAppError();
    if (reason === 'clickaway') {
      return;
    }
    //    setOpen(false);
  };

  const classes = useStyles();
 // const msalInstance = new PublicClientApplication(msalConfig);
  return (
    <MsalProvider instance={msalInstance}>
    <ErrorBoundary>
    <MsalAuthenticationTemplate interactionType="redirect" loadingComponent={InProgressComponent} errorComponent={ErrorComponent}>
                    <ProfileContent />

                </MsalAuthenticationTemplate>
            </ErrorBoundary>
            {/* <AuthenticatedTemplate>
                <p>User is signed in!</p>
            </AuthenticatedTemplate> */}
            <UnauthenticatedTemplate>
                <p>No users are signed in!</p>
            </UnauthenticatedTemplate>
    </MsalProvider>
  );
}

/*
  return (
    <MsalProvider instance={msalInstance}>
    <ErrorBoundary>
    <MsalAuthenticationTemplate interactionType="redirect" loadingComponent={InProgressComponent} errorComponent={ErrorComponent}>
                    <ProfileContent />

                </MsalAuthenticationTemplate>
            </ErrorBoundary>
            <UnauthenticatedTemplate>
                <p>No users are signed in!</p>
            </UnauthenticatedTemplate>
    </MsalProvider>
  );

*/

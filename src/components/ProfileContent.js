import React, { useEffect,useState } from "react";
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
import { MsalProvider, MsalAuthenticationTemplate, UnauthenticatedTemplate, useMsal, useAccount } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "../config/authConfig";
import { ErrorBoundary } from "./ErrorBoundary.jsx";
import { ProfileData, callMsGraph } from "./graph.jsx";



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

export default function ProfileContent({
  msalInstance,
  SetAccount,
  SetGraph,
  SetIsAuthenticated
}) {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [graphData, setGraphData] = useState(null);
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    // if (!isAuthenticated) {
    //   Push('/login');
    // }
    SetAccount(account);
    instance.acquireTokenSilent({
      ...loginRequest,
      account: account
    }).then((response) => {
        callMsGraph(response.accessToken).then(response => 
          {
            setGraphData(response);
            SetGraph(response);
          //  SetIsAuthenticated(true);
// PUT GRAPH DATA INTO MSAL REDUCER
          });
    });


  },[account]);

  function RequestProfileData() {
      instance.acquireTokenSilent({
          ...loginRequest,
          account: account
      }).then((response) => {
          callMsGraph(response.accessToken).then(response => setGraphData(response));
      });
  }
/*
{
    // home account identifier for this account object
    homeAccountId: string;
    // Entity who issued the token represented as a full host of it (e.g. login.microsoftonline.com)
    environment: string;
    // Full tenant or organizational id that this account belongs to
    tenantId: string;
    // preferred_username claim of the id_token that represents this account.
    username: string;
};
*/
  return (
      <>
          <h5 className="card-title">Welcome {account && account.name}</h5>
          {/* <ProfileData graphData={graphData} /> */}
          {/* {graphData ? 
              <ProfileData graphData={graphData} />
              :
              <Button onClick={RequestProfileData}>Request Profile Information</Button>
          } */}
      </>
  );
};


import React, { useEffect,useState } from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import { Tracker } from '../containers/Tracker/App';
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
import { ProfileData, callMsGraph,GetProfile,GetGroups,SendMail } from "./graph.jsx";
import { SetDepartment } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }

}));
// https://docs.microsoft.com/en-us/graph/api/user-list-transitivememberof?view=graph-rest-1.0&tabs=http

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

export default function AppSwitch({
  msalInstance,
  SetAccount,
  SetGraph,
  SetGroups,
  SetProfile,
  SetDepartment,
  Push,
  appError,
  ClearAppError,
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
    instance.acquireTokenSilent({
      ...loginRequest,
      account: account
    }).then((response) => {
        SetAccount(account);
        callMsGraph(response.accessToken).then(response => 
        {
          setGraphData(response);
          SetGraph(response);
        });
         /*
          GetGroups(response.accessToken).then(response => 
            {
              console.log(`before SetGroups`);
              SetGroups(response)
            });
            */
          GetProfile(response.accessToken).then(response => 
          {
            console.log(`before SetProfile ${response}`);
            SetProfile(response.positions[0].detail);
            const department = response.positions[0].detail.company.department;
            SetDepartment(department); 
            switch(department)
            {
              case 'Production':
                console.log(`Redirecting to Production`);
                Push('/tracker')
                break;
                case 'Engineering':
                  console.log(`Redirecting to Production`);
                  Push('/tracker')
                  break;
                default:
                break;
            }
          });
          // switch()
            /*
            SendMail(response.accessToken).then(response => 
              {
                console.log(`Mail Sent: Response=>${JSON.stringify(Response)}`);
              })
              .catch(error => {
                console.log(error);
                console.log(`SendMail error caught`);
              });
              */
        });


  },[account]);

  function RequestProfileData() {
    /*  WE ARE LOGGING IN USING THE REACT TEMPLATE
    AND NOT THIS acquireTokenSilent
       <MsalAuthenticationTemplate interactionType="redirect" loadingComponent={InProgressComponent} errorComponent={ErrorComponent}>
                    <ProfileContent />

                </MsalAuthenticationTemplate>
 
    */
      instance.acquireTokenSilent({
          ...loginRequest,
          account: account
      }).then((response) => {
          callMsGraph(response.accessToken).then(response => setGraphData(response));
      });
  }

  function Logout() {
    msalInstance.logout();
  }

  const handleClose = (event, reason) => {
   // ClearAppError();
    if (reason === 'clickaway') {
      return;
    }
    //    setOpen(false);
  };


  const classes = useStyles();

  return (
    // Need This style for placement
    <div className={classes.root}>
          {/* <h5 className="card-title">Welcome {account && account.name}</h5>
          <Button onClick={Logout}>Logout</Button> */}

          {/* <ProfileData graphData={graphData} /> */}
          {/* {graphData ? 
              <ProfileData graphData={graphData} />
              :
              <Button onClick={RequestProfileData}>Request Profile Information</Button>
          } */}

        <CssBaseline />
        <Switch>
          <Route exact path="/tracker" component={Tracker} />
          <Route exact path="/transition" component={LinearIndeterminate} />
        </Switch>
    </div>
  );
};


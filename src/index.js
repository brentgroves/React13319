import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useAccount,useIsAuthenticated } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "./config/authConfig";
import { ProfileData, callMsGraph } from "./graph.jsx";

import Button from '@material-ui/core/Button';

import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import { App } from './containers/App';
import * as serviceWorker from './serviceWorker';
import rootSaga from './sagas';
import setupServices from './services';
import { ConnectedRouter } from 'connected-react-router';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import store,{history} from './store'
import { SignIn } from './containers/SignIn';

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
          <h5 >Welcome {account && account.name}</h5>
          {graphData ? 
              <ProfileData graphData={graphData} />
              :
              <Button onClick={RequestProfileData}>Request Profile Information</Button>
          }
      </>
  );
};

const MainContent = () => {    
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
          <p>Anyone can see this paragraph.</p>
            {isAuthenticatedAAD && (
                <ProfileContent />
            )}
            {!isAuthenticatedAAD && (
                <p>No users are signed in!</p>
            )}

            <Button onClick={handleSignOut}>
              Sign Out
            </Button>

            <Button onClick={handleSignIn}>
              Sign In
            </Button>

      </React.Fragment>
   );
}

function AppTest() {
  const msalInstance = new PublicClientApplication(msalConfig);

  return (
      <MsalProvider instance={msalInstance}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>
      </MsalProvider>
  );
}


async function main() 
{

  if (process.env.NODE_ENV === 'production') {
    disableReactDevTools();
  }
  //https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-navigate-with-redux-action

  await setupServices(store.dispatch);


  ReactDOM.render(
    <React.StrictMode>
        <AppTest />
    </React.StrictMode>,
    document.getElementById("root")
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
  
}

main();
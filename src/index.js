import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useAccount,useIsAuthenticated } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "./config/authConfig";
import { ProfileData, callMsGraph } from "./graph.jsx";

import Button from '@material-ui/core/Button';

import { Provider } from 'react-redux';
import reducers from './reducers';

import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
// import App  from './components/App.jsx';
import { Authenticate } from './containers/Authenticate';
import * as serviceWorker from './serviceWorker';
import rootSaga from './sagas';
import setupServices from './services';
import { ConnectedRouter } from 'connected-react-router';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import store,{history} from './store'
import { SignIn } from './containers/SignIn';

// export const history = createBrowserHistory();

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
          <h5 >Welcome {account && account.name}</h5>
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
const MainContent = () => {    
  const { instance } = useMsal();
  const isAuthenticatedAAD = useIsAuthenticated();
  useEffect(() => {

    // This won't work!!!
    // It will cycle from microsoft login page to 
    // render with isAuthenticatedAAD == true
    // then isAuthenticatedAAD == false forever 
    // if(!isAuthenticatedAAD)
    // {
    //   instance.loginRedirect(loginRequest);
    // }

  });

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
            <React.Fragment>
                <ProfileContent />
                <Button onClick={handleSignOut}>
                Sign Out
              </Button>
              </React.Fragment>
              )}
            {!isAuthenticatedAAD && (
              <React.Fragment>
                <p>No users are signed in!</p>
                <Button onClick={handleSignIn}>
                Sign In
              </Button>
              </React.Fragment>
              )}



      </React.Fragment>
   );
}
*/
/*
const MainContent = () => {    
  return (
      <div className="App">
          <ErrorBoundary>
              <MsalAuthenticationTemplate interactionType="popup" loadingComponent={InProgressComponent} errorComponent={ErrorComponent}>
                  <ProfileContent />
              </MsalAuthenticationTemplate>
          </ErrorBoundary>

          <UnauthenticatedTemplate>
              <h5 className="card-title">Please sign-in to see your profile information.</h5>
          </UnauthenticatedTemplate>
      </div>
  );
};
*/
/*
            {isAuthenticatedAAD && (
                <ProfileContent />
            )}
            {!isAuthenticatedAAD && (
                <p>No users are signed in!</p>
            )}

  useEffect(() => {
    // Update the document title using the browser API
    if(!isAuthenticatedAAD)
    {
      instance.loginRedirect(loginRequest);
    }

  });
  */
 /*
function AppTest() {
  const msalInstance = new PublicClientApplication(msalConfig);

  return (
      <MsalProvider instance={msalInstance}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <MainContent />
          </ConnectedRouter>
        </Provider>
      </MsalProvider>
  );
}
*/
/*
function AppTest() {

  return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App/>
          </ConnectedRouter>
        </Provider>
  );
}
*/


async function main() 
{
  const sagaMiddleware = createSagaMiddleware();
  let store;

  // store = createStore(
  //   reducers(history), // root reducer with router state
  //   composeWithDevTools(
  //     applyMiddleware(
  //       routerMiddleware(history), // for dispatching history actions
  //       sagaMiddleware,
  //     ),
  //   ),
  // );

  // Until recently I could always use NODE_ENV 01/26/21
  // There is also a built-in environment variable called NODE_ENV. 
  // You can read it from process.env.NODE_ENV. When you run npm start, 
  // it is always equal to 'development', when you run npm test it is 
  // always equal to 'test', and when you run npm run build to make a 
  // production bundle, it is always equal to 'production'. You cannot 
  // override NODE_ENV manually. This prevents developers from 
  // accidentally deploying a slow development build to production.


  console.log(`process.env.NODE_ENV=${process.env.NODE_ENV}`);
  console.log(`process.env.REACT_APP_NODE_ENV=${process.env.REACT_APP_NODE_ENV}`);

  if (process.env.REACT_APP_NODE_ENV === 'production') {
    console.log('calling disableReactDevTools');
    disableReactDevTools();
  }
 
  // store = setupStore();
  if (process.env.REACT_APP_NODE_ENV === 'production') {
    console.log('createStore without DevTools');
    store = createStore(
      reducers(history), // root reducer with router state
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware,
      ),
    );
  } else {
    console.log('createStore with DevTools');
    store = createStore(
      reducers(history), // root reducer with router state
      composeWithDevTools(
        applyMiddleware(
          routerMiddleware(history), // for dispatching history actions
          sagaMiddleware,
        ),
      ),
    );
  }
  
  console.log('After apply middleware');
  //https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-navigate-with-redux-action

  await setupServices(store.dispatch);
  
  //sagaMiddleware.run(handleNewMessage, { services, username })
  sagaMiddleware.run(rootSaga);


  ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {' '}
        {/* place ConnectedRouter under Provider */}

        <Authenticate />
        </ConnectedRouter>
    </Provider>,
    // </React.StrictMode>,
    document.getElementById("root")
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
  
}

main();

/*
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
*/
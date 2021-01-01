import React from 'react';
import ReactDOM from 'react-dom';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useAccount } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "./config/authConfig";

import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import { App } from './containers/App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import rootSaga from './sagas';
import setupServices from './services';
import { ConnectedRouter } from 'connected-react-router';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

export const history = createBrowserHistory();

async function main() {
  const sagaMiddleware = createSagaMiddleware();
  let store;
  /* https://github.com/facebook/react-devtools/issues/191
  if (!window.location.port && typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
  } */

  if (process.env.NODE_ENV === 'production') {
    disableReactDevTools();
  }

  // store = setupStore();
  if (process.env.NODE_ENV === 'production') {
    store = createStore(
      reducers(history), // root reducer with router state
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware,
      ),
    );
  } else {
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
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {' '}
        {/* place ConnectedRouter under Provider */}
        <MsalProvider instance={msalInstance}>
        <App />
        </MsalProvider>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
}

main();

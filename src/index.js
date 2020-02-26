import React from 'react';
import ReactDOM from 'react-dom';
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

  if (process.env.NODE_ENV === 'production') {
    disableReactDevTools();
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

  //https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-navigate-with-redux-action

  const services = await setupServices(store.dispatch);

  //sagaMiddleware.run(handleNewMessage, { services, username })
  sagaMiddleware.run(rootSaga);

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {' '}
        {/* place ConnectedRouter under Provider */}
        <App />
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

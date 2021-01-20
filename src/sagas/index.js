import { put, takeEvery, all } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { push } from 'connected-react-router';
import * as users from './Users';
import * as sproc200206 from './Sproc200206';
import * as sproc200221 from './Sproc200221';
import * as upcomingToolChanges from './UpcomingToolChanges';
import * as toolChangeSummary from './ToolChangeSummary';
import * as kep13319 from './Kep13319';
import * as compareContainer from './CompareContainer';
import * as partProdRate from './PartProdRate';
import * as common from '@bgroves/common';

//var g_services;
//var g_dispatch;

// will not work?
/*  put(push(action.route)) Works when called from handleView200206 and others
    unsure if it works when called from UI menu item click via an action dispatch.
*/
function* handlePush(action) {
  common.log(`in handlePush() = ${action.path}`);
  yield put(push(action.path));
  //  yield put(push("/login"));
}

function* watchPush() {
  yield takeEvery(types.PUSH, handlePush);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    //    handleKep13318(),
    //    handleSignUp(),
    watchPush(),
    users.watchAuthenticate(),
    users.watchLogout(),
    sproc200206.watchView200206(),
    sproc200206.watchSproc200206Create(),
    sproc200206.watchSproc200206Fetch(),
    sproc200221.watchSproc200221Create(),
    sproc200221.watchSproc200221Fetch(),
    upcomingToolChanges.watchUpcomingToolChangesCreate(),
    upcomingToolChanges.watchUpcomingToolChangesFetch(),
    toolChangeSummary.watchCreateToolChangeSummary(),
    toolChangeSummary.watchFetchToolChangeSummary(),
    kep13319.watchKep13319Fetch(),
    compareContainer.watchCompareContainerFetch(),
    partProdRate.watchPartProdRateFetch()
    //    handleReAuthenticate()
  ]);
}

export function setSAGA(services, dispatch) {
  //  g_services = services;
  //  g_dispatch = dispatch;
  users.setSAGA(services, dispatch);
  sproc200206.setSAGA(services, dispatch);
  sproc200221.setSAGA(services, dispatch);
  kep13319.setSAGA(services, dispatch);
  compareContainer.setSAGA(services, dispatch);
  partProdRate.setSAGA(services, dispatch);
  upcomingToolChanges.setSAGA(services,dispatch);
  toolChangeSummary.setSAGA(services,dispatch);
}
/*
const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}

*/

/*
Kep13318Service.on('created', message => {
  common.log('Received a Kep13318 message', message);
  dispatch(messageReceived(message.text, 'Kep13313'));

});

srv.service('Kep13318').create({
text: "test",
}).catch((e) => {
// Show login page (potentially with `e.message`)
updateUserName('logged out')

alert('Authentication error');
});
*/

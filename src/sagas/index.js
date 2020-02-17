import { put, takeEvery, all } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import * as actions from "../actions";
import { push } from "connected-react-router";
//import { rcvDS13318, rcvKep13318, isAuthenticated,isAdmin,updateFirstName,SetAuthenticateError,Authen } from '../actions'
var datetime = require('node-datetime');
var g_test = "Global test";
var g_services;
var g_store;
var g_dispatch;
var nextTableNumber = 0


/*
export const handleSignUp = function* handleSignUp({services,dispatch}) {
  yield takeEvery(types.SIGNUP, (action) => {
    action.author = params.username
    await services.service('users')
      .create({
        "email": "user4@buschegroup.com",
        "password": "JesusLives1!",
        "userName": "Brent",
        "isAdmin": true,
        "roles": [ "Admin", "Manager", "Quality"]
    }).then(async (res) => {
      // Logged in
      //const { user } = await srv.get('authentication');
    console.log('created user!')
    //    console.log(res.user.isAdmin);
    //  console.log(res.user.userName);
      // Get//  setSAGA(srv,store);
//  dispatch(setServices(srv));
*/

// will not work
function* handlePush(action) {
  console.log("in handlePush()");
  yield put(push(action.path));
//  yield put(push("/login"));
}

function* handleAuthenticate(action) {
  console.log(action);
  try {
    g_dispatch(actions.AuthenticateIsSubmitting(true));
    var res = yield g_services.authenticate({
      strategy: "local",
      email: action.email,
      password: action.password
    });
    console.log(res.user.isAdmin);
    g_dispatch(actions.SetIsAuthenticated(true));
    g_dispatch(actions.SetIsAdmin(res.user.isAdmin));
    g_dispatch(actions.SetUserName(res.user.userName));
    g_dispatch(actions.SetFirstName(res.user.firstName));
    g_dispatch(actions.SetLastName(res.user.lastName));
    g_dispatch(actions.SetEmail(res.user.email));
    g_dispatch(actions.SetRoles(res.user.roles));
    g_dispatch(actions.AuthenticateIsSubmitting(false));
    yield put(push("/"));
  } catch (err) {
    g_dispatch(actions.SetAuthenticateError(err.message));
    console.log(err);
    g_dispatch(actions.AuthenticateIsSubmitting(false));
  }
}
function* handleLogout(action) {
  try {
    g_dispatch(actions.LogoutIsSubmitting(true));
    yield g_services.logout();
    g_dispatch(actions.SetIsAuthenticated(false));
    g_dispatch(actions.LogoutIsSubmitting(false));
  } catch (err) {
    console.log(err);
    g_dispatch(actions.LogoutIsSubmitting(false));
  }
}

function* handleSproc200206Create(action) {
  console.log("in handleSproc200206Create");
  let dateTime = datetime.create();
  let md = dateTime.format('md');
  let tableNumber = nextTableNumber++;
  let tableName = "rpt" + md + tableNumber;
  console.log(tableName);
  console.log(`startDate : ${action.startDate}, endDate: ${action.endDate}`)

  try {

    g_dispatch(actions.IsSubmitting(true))
    // DATA OR PARAM ????

    var res = yield g_services.service("sproc200206").create({
        tableName: tableName,
        startDate: action.startDate,
        endDate: action.endDate
    });
    console.log(`res: ${res}`);
    g_dispatch(actions.SetSprocName("sproc200206"));
    g_dispatch(actions.SetTableName(tableName));
    g_dispatch(actions.SetQueryTotal(res));
    g_dispatch(actions.SetQueryLimit(1000));
    g_dispatch(actions.SetQuerySkip(0));
    g_dispatch(actions.QueryFetch("sproc200206",tableName,1000,0));
    yield put(push("/sproc200206"));
    g_dispatch(actions.IsSubmitting(false));

  } catch (err) {
    console.log(err);
  }
}

function* handleQueryFetch(action) {
  g_dispatch(actions.IsSubmitting(true))

  console.log("in handleQueryFetch");
//  const {Sproc} = g_store;
  console.log(`sprocName: ${action.sprocName}, limit: ${action.limit},skip: ${action.skip}, tableName: ${action.tableName}`);
  try {
    var res = yield g_services.service(action.sprocName).find({
      query: {
        $tableName: action.tableName,
        $limit: action.limit,
        $skip: action.skip,
        $sort: {
          ID: 1
        }
      }
    });
    console.log(res);
//    g_dispatch(actions.SetQueryTotal(res.total));
  //  g_dispatch(actions.SetQueryLimit(res.limit));
//    g_dispatch(actions.SetQuerySkip(res.skip));
    g_dispatch(actions.SetQueryData(res));
    g_dispatch(actions.SetQuerySkip(action.skip))
    g_dispatch(actions.IsSubmitting(false))
  } catch (err) {
    console.log(err);
    g_dispatch(actions.IsSubmitting(false))
  }
}

function* handleFetchNextHourlyOEEValues(action) {
  console.log("in handleFetchNextHourlyOEEValues");
  try {
    var res = yield g_services.service("hourlyoeevalues").find({
      query: {
        $limit: 10,
        $skip: action.skip,
        $sort: {
          ID: 1
        }
      }
    });
    g_dispatch(actions.SetHourlyOEEValuesTotal(res.total));
    g_dispatch(actions.SetHourlyOEEValuesLimit(res.limit));
    g_dispatch(actions.SetHourlyOEEValuesSkip(res.skip));
    g_dispatch(actions.SetHourlyOEEValuesData(res.data));
  } catch (err) {
    console.log(err);
  }
}


function* watchPush() {
  yield takeEvery(types.PUSH, handlePush);
}

function* watchAuthenticate() {
  yield takeEvery(types.AUTHENTICATE_SAGA, handleAuthenticate);
}

function* watchLogout() {
  yield takeEvery(types.LOGOUT, handleLogout);
}

function* watchSproc200206Create(){
    yield takeEvery(
      types.SPROC200206_CREATE,
      handleSproc200206Create
    );
}

function* watchQueryFetch(){
  yield takeEvery(
    types.QUERY_FETCH,
    handleQueryFetch
  )
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    //    handleKep13318(),
    //    handleSignUp(),
    watchPush(),
    watchAuthenticate(),
    watchLogout(),
    watchSproc200206Create(),
    watchQueryFetch()
    //    handleReAuthenticate()
  ]);
}
export function setSAGA(services, dispatch) {
  g_services = services;
  g_dispatch = dispatch;
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
  console.log('Received a Kep13318 message', message);
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

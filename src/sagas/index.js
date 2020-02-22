import { put, takeEvery, all } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import * as actions from "../actions";
import { push } from "connected-react-router";
import * as errorType from '../constants/ErrorType'
import * as errorSeverity from '../constants/ErrorSeverity'

var datetime = require('node-datetime');
var g_services;
var g_dispatch;

/*
var g_test = "Global test";
var g_services;
var g_store;
var g_dispatch;
var nextTableNumber = 0
*/

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
  console.log("in handleAuthenticate");
  console.log(`email : ${action.email}, password: ${action.password}, route: ${action.route}, setSubmittingOff:${action.setSubmittingOff}`)

  try {
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
    if(action.setSubmittingOff){
      g_dispatch(actions.IsSubmitting(false));
    }
    if(action.route){
      yield put(push(action.route));
    }
  } catch (err) {
    g_dispatch(actions.SetError(err.message,errorType.SAGA,errorSeverity.LOW));
    console.log(err);
    if(action.setSubmittingOff){
      g_dispatch(actions.IsSubmitting(false));
    }
  }
}
function* handleLogout(action) {
  try {
    yield put(push("/login"));
    yield g_services.logout();
    g_dispatch(actions.SetIsAuthenticated(false));
  } catch (err) {
    console.log(err);
  }
}

function* handleSproc200206Create(action) {
  console.log("in handleSproc200206Create");
  /*
  let dateTime = datetime.create();
  let md = dateTime.format('md');
  let tableNumber = nextTableNumber++;
  let tableName = "rpt" + md + tableNumber;
  console.log(tableName);
  */
  console.log(`startDate : ${action.startDate}, endDate: ${action.endDate}, fetch: ${action.fetch}, limit:${action.limit}, route:${action.route}, setSubmittingOff:${action.setSubmittingOff}`)
  try {


    // DATA OR PARAM ????

    var res = yield g_services.service("sproc200206").create({
//        tableName: tableName,
        startDate: action.startDate,
        endDate: action.endDate,
        fetch: action.fetch,
        limit: action.limit
    });
    console.log(`res: ${res}`);
    g_dispatch(actions.Set200206Sproc("sproc200206"));
    g_dispatch(actions.Set200206Table(res.table));
    g_dispatch(actions.Set200206Total(res.record_count));
    g_dispatch(actions.Set200206Limit(action.limit));
    g_dispatch(actions.Set200206Skip(0));
    if(action.fetch){
      g_dispatch(actions.Sproc200206Fetch("sproc200206",res.table,action.limit,0,action.route,action.setSubmittingOff));
    }
    if(!action.fetch&&action.route){
      yield put(push(action.route));
    }
    if(!action.fetch&&action.setSubmittingOff){
      g_dispatch(actions.IsSubmitting(false));
    }
  } catch (err) {
    console.log(err);
    g_dispatch(actions.SetError(err.message,errorType.SAGA,errorSeverity.LOW));
  }
}

function* handleSproc200206Fetch(action) {
  console.log("in handleSproc200206Fetch");
//  const {Sproc} = g_store;
  console.log(`sproc: ${action.sproc}, limit: ${action.limit},skip: ${action.skip}, table: ${action.table},route: ${action.route},setSubmittingOff:${action.setSubmittingOff} `);
  try {
    var res = yield g_services.service(action.sproc).find({
      query: {
        $table: action.table,
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
    g_dispatch(actions.Set200206Data(res));
    g_dispatch(actions.Set200206Skip(action.skip))
    if(action.route){
      yield put(push(action.route));
    }
    if(action.setSubmittingOff){
      g_dispatch(actions.IsSubmitting(false));
    }
  } catch (err) {
    console.log(err);
    g_dispatch(actions.SetError(err.message,errorType.SAGA,errorSeverity.LOW));
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

function* watchSproc200206Fetch(){
  yield takeEvery(
    types.SPROC200206_FETCH,
    handleSproc200206Fetch
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
    watchSproc200206Fetch()
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

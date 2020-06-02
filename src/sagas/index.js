import { put, takeEvery, all } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";
import * as actions from "../actions";
import { push } from "connected-react-router";
import * as errorType from '../constants/ErrorType'
import * as errorSeverity from '../constants/ErrorSeverity'
import { log } from "../utils/log";

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
    log('created user!')
    //    log(res.user.isAdmin);
    //  log(res.user.userName);
      // Get//  setSAGA(srv,store);
//  dispatch(setServices(srv));
*/

// will not work
function* handlePush(action) {
  log("in handlePush()");
  yield put(push(action.path));
//  yield put(push("/login"));
}

function* handleAuthenticate(action) {
  log("in handleAuthenticate");
  log(`email : ${action.email}, password: ${action.password}, route: ${action.route}, setSubmittingOff:${action.setSubmittingOff}`)

  try {
    var res = yield g_services.authenticate({
      strategy: "local",
      email: action.email,
      password: action.password
    });
    log(res.user.isAdmin);
    g_dispatch(actions.SetIsAuthenticated(true));
    g_dispatch(actions.SetIsAdmin(res.user.isAdmin));
    g_dispatch(actions.SetUserName(res.user.userName));
    g_dispatch(actions.SetFirstName(res.user.firstName));
    g_dispatch(actions.SetLastName(res.user.lastName));
    g_dispatch(actions.SetEmail(res.user.email));
    g_dispatch(actions.SetRoles(res.user.roles));
    if(action.setSubmittingOff){
      g_dispatch(actions.Submitting(false));
    }
    if(action.route){
      yield put(push(action.route));
    }
  } catch (err) {
        log(`err: ${err.message}`);
    g_dispatch(actions.SetAppError(err.message,errorType.SAGA,errorSeverity.LOW));
    log(err);
    if(action.setSubmittingOff){
      g_dispatch(actions.Submitting(false));
    }
  }
}
function* handleLogout(action) {
  try {
    yield put(push("/login"));
    yield g_services.logout();
    g_dispatch(actions.SetIsAuthenticated(false));
  } catch (err) {
    log(err);
  }
}
 /* 
 This is called from a visualization menu item click
 */
function* handleView200206(action) {
  log("in handleView200206");
  log(`process.env.REACT_APP_FEATHERS_200206_SERVICE:${process.env.REACT_APP_FEATHERS_200206_SERVICE}`);
  log(`process.env.REACT_APP_FEATHERS_200221_SERVICE:${process.env.REACT_APP_FEATHERS_200221_SERVICE}`);
  log(`startDate : ${action.startDate}, endDate: ${action.endDate}, limit:${action.limit}, route:${action.route}, setSubmittingOff:${action.setSubmittingOff}`)
  try {
    let srv200206=process.env.REACT_APP_FEATHERS_200206_SERVICE;
    var res1 = yield g_services.service(srv200206).create({
//        tableName: tableName,
        startDate: action.startDate,
        endDate: action.endDate
    });
    log(`res1: ${res1}`);
    /*
    There are 3 services which do the same thing
    1. sproc200206 calls the MSSQL Kors production database that is updated by Mach2. 
    2. mysql200206 calls the MySQL Kors database using an MySQL connector. 
    3. maria200206 calls the MySQL Kors database using an MariaDb connector. 
    The MySQL Kors database lives in a docker container and is updated from records 
    exported from the MSSQL Kors database.  
    */
    g_dispatch(actions.Set200206Sproc(srv200206));
    g_dispatch(actions.Set200206Table(res1.table));
    g_dispatch(actions.Set200206Total(res1.record_count));
    g_dispatch(actions.Set200206Limit(action.limit));
    g_dispatch(actions.Set200206Skip(0));
    var res2 = yield g_services.service(srv200206).find({
      query: {
        $table: res1.table,
        $limit: action.limit,
        $skip: 0
      }
    });
//    log(res);
    g_dispatch(actions.Set200206Data(res2));
    var res3 = yield g_services.service("sproc200221").create({
//        tableName: tableName,
        startDate: action.startDate,
        endDate: action.endDate
    });
    log(`res3: ${res3}`);
    g_dispatch(actions.Set200221Sproc("sproc200221"));
    g_dispatch(actions.Set200221Table(res3.table));
    g_dispatch(actions.Set200221Total(res3.record_count));
    g_dispatch(actions.Set200221Limit(action.limit));
    g_dispatch(actions.Set200221Skip(0));

    var res4 = yield g_services.service("sproc200221").find({
      query: {
        $table: res3.table,
        $limit: action.limit,
        $skip: 0
      }
    });
    log(res4);
//    g_dispatch(actions.SetQueryTotal(res.total));
  //  g_dispatch(actions.SetQueryLimit(res.limit));
//    g_dispatch(actions.SetQuerySkip(res.skip));
    g_dispatch(actions.Set200221Data(res4));

    if(action.route){
      yield put(push(action.route));
    }
    if(action.setSubmittingOff){
      g_dispatch(actions.Submitting(false));
    }
//    var error = new Error("The error message");
  } catch (err) {
    log(err);
    g_dispatch(actions.SetAppError(err.message,errorType.SAGA,errorSeverity.LOW));
  }
}

function* handleSproc200206Create(action) {
  log("in handleSproc200206Create");
  log(`startDate : ${action.startDate}, endDate: ${action.endDate}, fetch: ${action.fetch}, limit:${action.limit}, route:${action.route}, setSubmittingOff:${action.setSubmittingOff}`)
  try {
    var res = yield g_services.service("sproc200206").create({
//        tableName: tableName,
        startDate: action.startDate,
        endDate: action.endDate,
        fetch: action.fetch,
        limit: action.limit
    });
    log(`res: ${res}`);
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
      g_dispatch(actions.Submitting(false));
    }
//    var error = new Error("The error message");
  } catch (err) {
    log(err);
    g_dispatch(actions.SetAppError(err.message,errorType.SAGA,errorSeverity.LOW));
  }
}

function* handleSproc200206Fetch(action) {
  log("in handleSproc200206Fetch");
//  const {Sproc} = g_store;
  log(`sproc: ${action.sproc}, limit: ${action.limit},skip: ${action.skip}, table: ${action.table},route: ${action.route},setSubmittingOff:${action.setSubmittingOff} `);
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
//    log(res);
//    g_dispatch(actions.SetQueryTotal(res.total));
  //  g_dispatch(actions.SetQueryLimit(res.limit));
//    g_dispatch(actions.SetQuerySkip(res.skip));
    g_dispatch(actions.Set200206Data(res));
    g_dispatch(actions.Set200206Skip(action.skip))
    if(action.route){
      yield put(push(action.route));
    }
    if(action.setSubmittingOff){
      g_dispatch(actions.Submitting(false));
    }
  } catch (err) {
    log(err);
    g_dispatch(actions.SetAppError(err.message,errorType.SAGA,errorSeverity.LOW));
  }
}

function* handleSproc200221Create(action) {
  log("in handleSproc200221Create");
  log(`startDate : ${action.startDate}, endDate: ${action.endDate}, fetch: ${action.fetch}, limit:${action.limit}, route:${action.route}, setSubmittingOff:${action.setSubmittingOff}`)
  try {
    var res = yield g_services.service("sproc200221").create({
//        tableName: tableName,
        startDate: action.startDate,
        endDate: action.endDate,
        fetch: action.fetch,
        limit: action.limit
    });
    log(`res: ${res}`);
    g_dispatch(actions.Set200221Sproc("sproc200221"));
    g_dispatch(actions.Set200221Table(res.table));
    g_dispatch(actions.Set200221Total(res.record_count));
    g_dispatch(actions.Set200221Limit(action.limit));
    g_dispatch(actions.Set200221Skip(0));
    if(action.fetch){
      g_dispatch(actions.Sproc200221Fetch("sproc200221",res.table,action.limit,0,action.route,action.setSubmittingOff));
    }
    if(!action.fetch&&action.route){
      yield put(push(action.route));
    }
    if(!action.fetch&&action.setSubmittingOff){
      g_dispatch(actions.Submitting(false));
    }
//    var error = new Error("The error message");
  } catch (err) {
    log(err);
    g_dispatch(actions.SetAppError(err.message,errorType.SAGA,errorSeverity.LOW));
  }
}

function* handleSproc200221Fetch(action) {
  log("in handleSproc200221Fetch");
//  const {Sproc} = g_store;
  log(`sproc: ${action.sproc}, limit: ${action.limit},skip: ${action.skip}, table: ${action.table},route: ${action.route},setSubmittingOff:${action.setSubmittingOff} `);
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
    log(res);
//    g_dispatch(actions.SetQueryTotal(res.total));
  //  g_dispatch(actions.SetQueryLimit(res.limit));
//    g_dispatch(actions.SetQuerySkip(res.skip));
    g_dispatch(actions.Set200221Data(res));
    g_dispatch(actions.Set200221Skip(action.skip))
    if(action.route){
      yield put(push(action.route));
    }
    if(action.setSubmittingOff){
      g_dispatch(actions.Submitting(false));
    }
  } catch (err) {
    log(err);
    g_dispatch(actions.SetAppError(err.message,errorType.SAGA,errorSeverity.LOW));
  }
}

function* handleFetchNextHourlyOEEValues(action) {
  log("in handleFetchNextHourlyOEEValues");
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
    log(err);
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

function* watchSproc200221Create(){
    yield takeEvery(
      types.SPROC200221_CREATE,
      handleSproc200221Create
    );
}

function* watchSproc200221Fetch(){
  yield takeEvery(
    types.SPROC200221_FETCH,
    handleSproc200221Fetch
  )
}

function* watchView200206(){
  yield takeEvery(
    types.VIEW_200206,
    handleView200206
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
    watchView200206(),
    watchSproc200206Create(),
    watchSproc200206Fetch(),
    watchSproc200221Create(),
    watchSproc200221Fetch()

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
  log('Received a Kep13318 message', message);
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

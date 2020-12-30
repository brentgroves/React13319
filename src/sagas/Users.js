import { put, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";
import * as actions from "../actions";
import * as types from "../constants/ActionTypes";
import * as errorType from '../constants/ErrorType'
import * as errorSeverity from '../constants/ErrorSeverity'
import * as common from '@bgroves/common'; 
// const common = require('@bgroves/common');
var g_services;
var g_dispatch;
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
    common.log('created user!')
    //    common.log(res.user.isAdmin);
    //  common.log(res.user.userName);
      // Get//  setSAGA(srv,store);
//  dispatch(setServices(srv));
*/


function* handleAuthenticate(action) {
  common.log(`in handleAuthenticate email=${action.email},password=${action.password}`);

  try {
    var res = yield g_services.authenticate({
      strategy: "local",
      email: action.email,
      password: action.password
    });
    common.log(res.user.isAdmin);
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
        common.log(`err: ${err.message}`);
    g_dispatch(actions.SetAppError(err.message,errorType.SAGA,errorSeverity.LOW));
    common.log(err);
    if(action.setSubmittingOff){
      g_dispatch(actions.Submitting(false));
    }
  }
}
function* handleLogout(action) {
  try {
//    yield put(push("/login"));
    yield g_services.logout();
    g_dispatch(actions.SetIsAuthenticated(false));
  } catch (err) {
    common.log(err);
  }
}


export function* watchAuthenticate() {
  yield takeEvery(types.AUTHENTICATE_SAGA, handleAuthenticate);
}

export function* watchLogout() {
  yield takeEvery(types.LOGOUT, handleLogout);
}



export function setSAGA(services, dispatch) {
  g_services = services;
  g_dispatch = dispatch;
}



import * as types from '../constants/ActionTypes'
import * as actions from '../actions'
import {setSAGA} from '../sagas'
import { log } from "../utils/log";
const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client')
const io = require('socket.io-client');
const auth = require('@feathersjs/authentication-client');

// seting dispatch as a global variable works, but setting
// store as a global variable in Saga messes up the generator functions
const setupServices = async (dispatch) => {
  log(`In settupServices: ${process.env.REACT_APP_FEATHERS_HOSTNAME}:${process.env.REACT_APP_FEATHERS_PORT}:${process.env.REACT_APP_FEATHERS_200206_SERVICE}`);

  const connectionString = `http://${process.env.REACT_APP_FEATHERS_HOSTNAME}:${process.env.REACT_APP_FEATHERS_PORT}`;
  log(`connectionString: ${connectionString}`);
  const socket = io(connectionString);

//  const socket = io('http://10.1.0.100:3030');
  const srv = feathers();

  // Setup the transport (Rest, Socket, etc.) here
  srv.configure(socketio(socket));

  // Available options are listed in the "Options" section
  srv.configure(auth({
    storageKey: 'auth'
  }))
/*
mwhelpley@buschegroup.com/cwAEKkNa%0V3
kyoung@buschegroup.com/1XdFJlJ!wMDe
cchaudry@buschegroup.com/!@TIS$iYURtx

"email": "mwhelpley@buschegroup.com",
"password": "cwAEKkNa%0V3",
"userName": "mwhelpley",
"firstName": "Mike",
"lastName": "Whelpley",
"isAdmin": true,
"roles": [ "Admin", "Manager", "Quality"]
"email": "bgroves@buschegroup.com",
"password": "JesusLives1!",
"userName": "bgroves",
"firstName": "Brent",
"lastName": "Groves",
"isAdmin": true,
"roles": [ "Admin", "Manager", "Quality"]
"email": "kyoung@buschegroup.com",
"password": "1XdFJlJ!wMDe",
"userName": "kyoung",
"firstName": "Kevin",
"lastName": "Young",
"isAdmin": true,
"roles": [ "Admin", "Manager", "Quality"]
"email": "cchaudry@buschegroup.com",
"password": "!@TIS$iYURtx",
"userName": "cchaudry",
"firstName": "Casey",
"lastName": "Chaudry",
"isAdmin": true,
"roles": [ "Admin", "Manager", "Quality"]

*/
/*
  await srv.service('users')
    .create({
      "email": "ccrandall@buschegroup.com",
      "password": "cpo@NSmD4l1x",
      "userName": "ccrandall",
      "firstName": "Charles",
      "lastName": "Crandall",
      "isAdmin": true,
      "roles": [ "Admin", "Manager", "Quality"]


  }).then(async (res) => {
    // Logged in
    //const { user } = await srv.get('authentication');
log('created user!')
//    log(res.user.isAdmin);
  //  consollocalhoste.log(res.user.userName);
    // Gets the authenticated accessToken (JWT)
    //const { accessToken } = await app.get('authentication');
  //  dispatch(addUserName(res.user.userName))
  //  dispatch(isAdmin(true));
  //  dispatch(isAuthenticated(true));
  }).catch(e => {
    // Show login page (potentially with `e.message`)
    console.error('Authentication error', e);
  });
*/
/*
await srv.authenticate({
"strategy": "local",
"email": "user4@buschegroup.com",
"password": "JesusLives1!"
}).then(async (res) => {
  // Logged in
  //const { user } = await srv.get('authentication');

  log(res.user.isAdmin);
  log(res.user.userName);
  // Gets the authenticated accessToken (JWT)
  //const { accessToken } = await app.get('authentication');
//  dispatch(addUserName(res.user.userName))
  dispatch(isAdmin(res.user.isAdmin));
  dispatch(updateFirstName(res.user.userName))
  dispatch(isAuthenticated(true));
  dispatch(setServices(srv));
}).catch(e => {localhost
  // Show login page (potentially with `e.message`)
  console.error('Authentication error', e);
});
*/

log('Before reAuthenticate')

await srv.reAuthenticate().then((res) => {
log('In reAuthenticate')
log(res.user)
dispatch(actions.SetIsAuthenticated(true));
dispatch(actions.SetIsAdmin(res.user.isAdmin));
dispatch(actions.SetUserName(res.user.userName));
dispatch(actions.SetFirstName(res.user.firstName));
dispatch(actions.SetLastName(res.user.lastName));
dispatch(actions.SetEmail(res.user.email));
dispatch(actions.SetRoles(res.user.roles))
}).catch(e => {
  // Show login page (potentially with `e.message`)
  console.error('reAuthenticate error', e);
});

  // seting dispatch as a global variable works, but setting
  // store as a global variable messes up the generator functions
  setSAGA(srv,dispatch);

//await srv.logout().then(dispatch(isAuthenticated(false)));
 // dispatch(isAdmin(true));
  //dispatch(addApp(srv));



  return srv
}

export default setupServices

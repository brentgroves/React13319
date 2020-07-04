import * as actions from '../actions';
import { setSAGA } from '../sagas';
import * as common from '@bgroves/common';
import * as appSet from '../constants/AppSet';
const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
const io = require('socket.io-client');
const auth = require('@feathersjs/authentication-client');

//THIS IS ONLY A TEMPLATE TAKEN FROM BPG SERVICES SETUP.
// seting dispatch as a global variable works, but setting
// store as a global variable in Saga messes up the generator functions
const setupServices = async (dispatch) => {


  common.log(
    `In settupServices: ${process.env.REACT_APP_FEATHERS_HOSTNAME}:${process.env.REACT_APP_FEATHERS_PORT}:${process.env.REACT_APP_FEATHERS_200206_SERVICE}`,
  );

  const connectionString = `http://${process.env.REACT_APP_FEATHERS_HOSTNAME}:${process.env.REACT_APP_FEATHERS_PORT}`;
  common.log(`connectionString: ${connectionString}`);
  const socket = io(connectionString);

  //  const socket = io('http://10.1.0.100:3030');
  const srv = feathers();

  // Setup the transport (Rest, Socket, etc.) here
  srv.configure(socketio(socket));

  // Available options are listed in the "Options" section
  srv.configure(
    auth({
      storageKey: 'auth',
    }),
  );

  // seting dispatch as a global variable works, but setting
  // store as a global variable messes up the generator functions
  setSAGA(srv, dispatch);
  common.log('connecting to Kep13318');
  // This did not seem to work?  I did not see any log message from the
  // SAGA handler; so I called the service directly.
  // dispatch(actions.Kep13319Fetch('',false));
  await srv
    .service('kep13319')
    .find({
      query: {
        $sort: {
          ID: 1,
        },
      },
    })
    .then((nodes) => {
      common.log('Done with Kep13319.find()');
      let msgString = JSON.stringify(nodes[0]);
      const obj = JSON.parse(msgString.toString()); // payload is a buffer
      common.log(obj);

      dispatch(actions.SetNodes(nodes));
    })
    .catch((e) => {
      // Show login page (potentially with `e.message`)
      console.error('Kep13319.find() error', e);
    });

  common.log('Before reAuthenticate');
  await srv
    .reAuthenticate()
    .then((res) => {
      common.log('In reAuthenticate');
      common.log(res.user);
      dispatch(actions.SetIsAuthenticated(true));
      dispatch(actions.SetIsAdmin(res.user.isAdmin));
      dispatch(actions.SetUserName(res.user.userName));
      dispatch(actions.SetFirstName(res.user.firstName));
      dispatch(actions.SetLastName(res.user.lastName));
      dispatch(actions.SetEmail(res.user.email));
      dispatch(actions.SetRoles(res.user.roles));
      let set;
      switch (res.user.roles[0]) {
        case 'Admin':
          set = appSet.BPG;
          break;
        case 'Manager':
          set = appSet.BPG;
          break;
        case 'Quality':
          set = appSet.BPG;
          break;
        case 'Home':
          set = appSet.HOME;
          break;
        default:
          set = appSet.BPG;
      }
      dispatch(actions.SetAppSet(set));
    })
    .catch((e) => {
      // Show login page (potentially with `e.message`)
      console.error('reAuthenticate error', e);
    });

  const kep13319 = srv.service('kep13319');
  kep13319.on('updated', (message, context) => {
    common.log('updated', message);
    dispatch(actions.UpdateNode(message.updateId, message.value));
    //  console.common.log(`context=>${context}`);
  });

  return srv;
};

export default setupServices;

/*
mwhelpley@buschegroup.com/cwAEKkNa%0V3
kyoung@buschegroup.com/1XdFJlJ!wMDe
cchaudry@buschegroup.com/!@TIS$iYURtxsrv

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
common.log('created user!')
//    common.log(res.user.isAdmin);
  //  consollocalhoste.common.log(res.user.userName);
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

  common.log(res.user.isAdmin);
  common.log(res.user.userName);
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

//await srv.logout().then(dispatch(isAuthenticated(false)));
// dispatch(isAdmin(true));
//dispatch(addApp(srv));

import * as types from '../constants/ActionTypes';
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "../config/authConfig";

const msalInstance = new PublicClientApplication(msalConfig);
// You can't login here...
// msalInstance.loginRedirect(loginRequest);

// common.log(`process.env.REACT_APP_SET=${process.env.REACT_APP_SET}`);

const initState = {
  msalInstance: msalInstance, 
  account:null,
  graph:null,
  profile:null,
};

const Msal = (state = initState, action) => {
  switch (action.type) {
    case types.SET_MSAL: {
      console.log('in SetMsal');
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
        msalInstance: action.msalInstance,
      });
    }
    case types.SET_ACCOUNT: {
      console.log(`in SetAccount ${action.account}`);
      return Object.assign({}, state, {
        account: action.account,
      });
    }
    case types.SET_GRAPH: {
      console.log(`in SetGraph ${action.graph}`);
      return Object.assign({}, state, {
        graph: action.graph,
      });
    }
    case types.SET_GROUPS: {
      console.log(`in SetGroups ${action.groups}`);
      return Object.assign({}, state, {
        groups: action.groups,
      });
    }
    case types.SET_PROFILE: {
      console.log(`in SetProfile ${action.profile}`);
      return Object.assign({}, state, {
        profile: action.profile,
      });
    }
    default:
      return state;
  }
};

export default Msal;

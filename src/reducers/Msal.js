import * as types from '../constants/ActionTypes';
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "../config/authConfig";

const msalInstance = new PublicClientApplication(msalConfig);
// You can't login here...
// msalInstance.loginRedirect(loginRequest);

// common.log(`process.env.REACT_APP_SET=${process.env.REACT_APP_SET}`);

const initState = {
  msalInstance: msalInstance, 
};

const Msal = (state = initState, action) => {
  switch (action.type) {
    case types.SET_MSAL: {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
        msalInstance: action.msalInstance,
      });
    }
    default:
      return state;
  }
};

export default Msal;

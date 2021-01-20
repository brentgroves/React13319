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
  jobTitle:null,
  companyName:null,
  officeLocation:null,
  department:null,
  username:null,
  name:null,
  givenName:null,
  surName:null,
  initials:null,
};

const Msal = (state = initState, action) => {
  switch (action.type) {
    case types.SET_MSAL: {
      console.log(`in SetMsal`);
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
        msalInstance: action.msalInstance,
      });
    }
    case types.SET_ACCOUNT: {
      console.log(`in SetAccount ${action.account}`);
      return Object.assign({}, state, {
        account: action.account,
        username: action.account.username,
        name: action.account.name,
      });
    }
    case types.SET_GRAPH: {
      console.log(`in SetGraph ${action.graph}`);
      return Object.assign({}, state, {
        graph: action.graph,
        givenName: action.graph.givenName,
        surName: action.graph.surname,
        initials: action.graph.givenName.substring(0, 1)+action.graph.surname.substring(0, 1),
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
        jobTitle: action.profile.jobTitle,
        companyName: action.profile.company.displayName,
        officeLocation: action.profile.company.officeLocation,
      });
    }
    case types.SET_DEPARTMENT: {
      console.log(`in SetDepartment ${action.department}`);
      return Object.assign({}, state, {
        department: action.department,
      });
    }
    default:
      return state;
  }
};

export default Msal;

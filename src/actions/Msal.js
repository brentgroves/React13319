import * as errorSeverity from '../constants/ErrorSeverity';
import * as errorType from '../constants/ErrorType';
import * as types from '../constants/ActionTypes';

// Msal Reducer
export const SetAccount = (account) => ({
  type: types.SET_ACCOUNT,
  account,
});

export const SetGraph = (graph) => ({
  type: types.SET_GRAPH,
  graph,
});

export const SetGroups = (groups) => ({
  type: types.SET_GROUPS,
  groups,
});

export const SetProfile = (profile) => ({
  type: types.SET_PROFILE,
  profile,
});

export const SetDepartment = (department) => ({
  type: types.SET_DEPARTMENT,
  department,
});

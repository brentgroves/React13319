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


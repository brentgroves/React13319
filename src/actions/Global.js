import * as errorSeverity from '../constants/ErrorSeverity';
import * as errorType from '../constants/ErrorType';
import * as types from '../constants/ActionTypes';

// No Reducer
export const Push = (path) => ({
  type: types.PUSH,
  path,
});

// Global Reducer
export const SetAppSet = (appSet) => ({
  type: types.SET_APPSET,
  appSet,
});
export const SetCurrentApp = (appId) => ({
  type: types.SET_CURRENT_APP,
  appId,
});
export const Submitting = (submitting) => ({
  type: types.SUBMITTING,
  submitting,
});
export const SetAppError = (message, errorType, severity) => ({
  type: types.SET_APP_ERROR,
  message,
  errorType,
  severity,
});
export const ClearAppError = () => ({
  type: types.CLEAR_APP_ERROR,
  error: '',
  errorType: errorType.NONE,
  severity: errorSeverity.NONE,
});


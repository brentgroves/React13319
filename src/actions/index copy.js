import * as errorSeverity from '../constants/ErrorSeverity';
import * as errorType from '../constants/ErrorType';
import * as types from '../constants/ActionTypes';

import Global from './Global'
import User from './User'
import Sproc200206 from './Sproc200206'
import Sproc200221 from './Sproc200221'
import Dialogs from './Dialogs'
import Kep13319 from './Kep13319'
//import * as actions from '../../actions';

export * from './BPGActions';
export * as home from './HomeActions';

let nextKep13318Id = 0;
// No Reducer
export const Push = (path) => ({
  type: types.PUSH,
  path,
});

// Kep13319 Reducer
export const Kep13319Fetch = (route, setSubmittingOff) => ({
  type: types.KEP13319_FETCH,
  route,
  setSubmittingOff,
});

export const SetNodes = (nodes) => ({
  type: types.SET_NODES,
  nodes,
});

export const UpdateNode = (updateId, value) => ({
  type: types.UPDATE_NODE,
  updateId,
  value,
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

// User Reducer
export const AuthenticateSaga = (email, password, route, setSubmittingOff) => ({
  type: types.AUTHENTICATE_SAGA,
  email,
  password,
  route,
  setSubmittingOff,
});

export const SetIsAuthenticated = (isAuthenticated) => ({
  type: types.SET_IS_AUTHENTICATED,
  isAuthenticated,
});

export const SetIsAdmin = (isAdmin) => ({
  type: types.SET_IS_ADMIN,
  isAdmin,
});

export const SetRoles = (roles) => ({
  type: types.SET_ROLES,
  roles,
});
export const SetEmail = (email) => ({
  type: types.SET_EMAIL,
  email,
});

export const SetUserName = (userName) => ({
  type: types.SET_USERNAME,
  userName,
});

export const SetFirstName = (firstName) => ({
  type: types.SET_FIRSTNAME,
  firstName,
});
export const SetLastName = (lastName) => ({
  type: types.SET_LASTNAME,
  lastName,
});

export const Logout = () => ({
  type: types.LOGOUT,
});

export const View200206 = (
  startDate,
  endDate,
  limit,
  route,
  setSubmittingOff,
) => ({
  type: types.VIEW_200206,
  startDate,
  endDate,
  limit,
  route,
  setSubmittingOff,
});

export const Sproc200206Create = (
  startDate,
  endDate,
  fetch,
  limit,
  route,
  setSubmittingOff,
) => ({
  type: types.SPROC200206_CREATE,
  startDate,
  endDate,
  fetch,
  limit,
  route,
  setSubmittingOff,
});

export const Sproc200206Fetch = (
  sproc,
  table,
  limit,
  skip,
  route,
  setSubmittingOff,
) => ({
  type: types.SPROC200206_FETCH,
  sproc,
  table,
  limit,
  skip,
  route,
  setSubmittingOff,
});

export const Set200206Sproc = (sproc) => ({
  type: types.SET_200206_SPROC,
  sproc,
});

export const Set200206Table = (table) => {
  return {
    type: types.SET_200206_TABLE,
    table,
  };
};

export const Set200206Total = (total) => ({
  type: types.SET_200206_TOTAL,
  total,
});

export const Set200206Limit = (limit) => ({
  type: types.SET_200206_LIMIT,
  limit,
});

export const Set200206Skip = (skip) => ({
  type: types.SET_200206_SKIP,
  skip,
});

export const Set200206Data = (data) => ({
  type: types.SET_200206_DATA,
  data,
});

//SAGAS
export const Sproc200221Create = (
  startDate,
  endDate,
  fetch,
  limit,
  route,
  setSubmittingOff,
) => ({
  type: types.SPROC200221_CREATE,
  startDate,
  endDate,
  fetch,
  limit,
  route,
  setSubmittingOff,
});

export const Sproc200221Fetch = (
  sproc,
  table,
  limit,
  skip,
  route,
  setSubmittingOff,
) => ({
  type: types.SPROC200221_FETCH,
  sproc,
  table,
  limit,
  skip,
  route,
  setSubmittingOff,
});

export const Set200221Sproc = (sproc) => ({
  type: types.SET_200221_SPROC,
  sproc,
});

export const Set200221Table = (table) => {
  return {
    type: types.SET_200221_TABLE,
    table,
  };
};

export const Set200221Total = (total) => ({
  type: types.SET_200221_TOTAL,
  total,
});

export const Set200221Limit = (limit) => ({
  type: types.SET_200221_LIMIT,
  limit,
});

export const Set200221Skip = (skip) => ({
  type: types.SET_200221_SKIP,
  skip,
});

export const Set200221Data = (data) => ({
  type: types.SET_200221_DATA,
  data,
});

// Dialogs
export const OpenDialog200206 = (open) => ({
  type: types.OPEN_DIALOG_200206,
  open,
});

// Obsolete
export const SetHourlyOEEValuesTotal = (total) => ({
  type: types.SET_HOURLY_OEE_VALUES_TOTAL,
  total,
});

export const SetHourlyOEEValuesLimit = (limit) => ({
  type: types.SET_HOURLY_OEE_VALUES_LIMIT,
  limit,
});

export const SetHourlyOEEValuesSkip = (skip) => ({
  type: types.SET_HOURLY_OEE_VALUES_SKIP,
  skip,
});

export const SetHourlyOEEValuesData = (data) => ({
  type: types.SET_HOURLY_OEE_VALUES_DATA,
  data,
});

export const FetchNextHourlyOEEValues = (skip) => ({
  type: types.FETCH_NEXT_HOURLY_OEE_VALUES,
  skip,
});

/* add from UI is obviously not needed but is for testing */
export const AddKep13318 = (text) => ({
  type: types.ADD_KEP13318,
  id: nextKep13318Id++,
  text,
});
export const RcvKep13318 = (text) => ({
  type: types.RCV_KEP13318,
  id: nextKep13318Id++,
  text,
});

export const RcvDS13318 = (records) => ({
  type: types.RCV_DS13318,
  records,
});

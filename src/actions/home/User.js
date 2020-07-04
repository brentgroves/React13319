import * as types from '../../constants/ActionTypes';
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


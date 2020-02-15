import * as types from '../constants/ActionTypes'


let nextDS13318Id = 0
let nextKep13318Id = 0
// No Reducer
export const Push = (path) => ({
  type: types.PUSH,
  path
})


// Global Reducer
export const IsSubmitting = (isSubmitting) => ({
  type: types.IS_SUBMITTING,
  isSubmitting
})

// User Reducer
export const AuthenticateIsSubmitting = (authenticateIsSubmitting) => ({
  type: types.AUTHENTICATE_IS_SUBMITTING,
  authenticateIsSubmitting
})
export const AuthenticateSaga = (user) => ({
  type: types.AUTHENTICATE_SAGA,
  email: user.email,
  password: user.password
})

export const SetAuthenticateError = (error) => ({
  type: types.SET_AUTHENTICATE_ERROR,
  error: error
})
export const ClearAuthenticateError = () => ({
  type: types.CLEAR_AUTHENTICATE_ERROR
})

export const SetIsAuthenticated = (isAuthenticated) => ({
  type: types.SET_IS_AUTHENTICATED,
  isAuthenticated
})

export const SetIsAdmin = (isAdmin) => ({
  type: types.SET_IS_ADMIN,
  isAdmin
})

export const SetRoles = (roles) => ({
    type: types.SET_ROLES,
    roles
})
export const SetEmail = (email) => ({
  type: types.SET_EMAIL,
  email
})

export const SetUserName = (userName) => ({
  type: types.SET_USERNAME,
  userName
})

export const SetFirstName = (firstName) => ({
  type: types.SET_FIRSTNAME,
  firstName
})
export const SetLastName = (lastName) => ({
  type: types.SET_LASTNAME,
  lastName
})

export const LogoutIsSubmitting = (logoutIsSubmitting) => ({
  type: types.LOGOUT_IS_SUBMITTING,
  logoutIsSubmitting
})

export const Logout = () => ({
  type: types.LOGOUT
})


// Sproc Reducer
export const SetSprocName = (sprocName) => ({
  type: types.SET_SPROC_NAME,
  sprocName
})

export const SetTableName = (tableName) => {
  return  {
    type: types.SET_TABLE_NAME,
    tableName
  }
}

export const SetQueryTotal = (total) => ({
  type: types.SET_QUERY_TOTAL,
  total
})

export const SetQueryLimit = (limit) => ({
  type: types.SET_QUERY_LIMIT,
  limit
})

export const SetQuerySkip = (skip) => ({
  type: types.SET_QUERY_SKIP,
  skip
})

export const SetQueryData = (data) => ({
  type: types.SET_QUERY_DATA,
  data
})

export const QueryFetch = (sprocName,tableName,limit,skip) => ({
  type: types.QUERY_FETCH,
  sprocName,
  tableName,
  limit,
  skip
})

export const Sproc200206Create = (startDate,endDate) => ({
  type: types.SPROC200206_CREATE,
  startDate,
  endDate
})

// Dialogs
export const OpenSproc200206Dialog = (open) => ({
  type: types.OPEN_SPROC200206_DIALOG,
  open
})


// Obsolete
export const SetHourlyOEEValuesTotal = (total) => ({
  type: types.SET_HOURLY_OEE_VALUES_TOTAL,
  total
})

export const SetHourlyOEEValuesLimit = (limit) => ({
  type: types.SET_HOURLY_OEE_VALUES_LIMIT,
  limit
})

export const SetHourlyOEEValuesSkip = (skip) => ({
  type: types.SET_HOURLY_OEE_VALUES_SKIP,
  skip
})

export const SetHourlyOEEValuesData = (data) => ({
  type: types.SET_HOURLY_OEE_VALUES_DATA,
  data
})

export const FetchNextHourlyOEEValues = (skip) => ({
  type: types.FETCH_NEXT_HOURLY_OEE_VALUES,
  skip
})

/* add from UI is obviously not needed but is for testing */
export const AddKep13318 = (text) => ({
  type: types.ADD_KEP13318,
  id: nextKep13318Id++,
  text
})
export const RcvKep13318 = (text) => ({
  type: types.RCV_KEP13318,
  id: nextKep13318Id++,
  text
})

export const RcvDS13318 = (records) => ({
  type: types.RCV_DS13318,
  records
})

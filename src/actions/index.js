import * as types from '../constants/ActionTypes'
import * as errorType from '../constants/ErrorType'
import * as errorSeverity from '../constants/ErrorSeverity'

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
export const SetError = (message,type,severity) => ({
  type: types.SET_ERROR,
  message,
  type,
  severity
})
export const ClearError = () => ({
  type: types.CLEAR_ERROR,
  message:"",
  type:errorType.NONE,
  severity:errorSeverity.NONE
})

// User Reducer
export const AuthenticateSaga = (email,password,route,setSubmittingOff) => ({
  type: types.AUTHENTICATE_SAGA,
  email,
  password,
  route,
  setSubmittingOff
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


export const Logout = () => ({
  type: types.LOGOUT
})


export const Sproc200206Create = (startDate,endDate,fetch,limit,route,setSubmittingOff) => ({
  type: types.SPROC200206_CREATE,
  startDate,
  endDate,
  fetch,
  limit,
  route,
  setSubmittingOff
})

export const Sproc200206Fetch = (sproc,table,limit,skip,route,setSubmittingOff) => ({
  type: types.SPROC200206_FETCH,
  sproc,
  table,
  limit,
  skip,
  route,
  setSubmittingOff
})


export const Set200206Sproc = (sproc) => ({
  type: types.SET_200206_SPROC,
  sproc
})

export const Set200206Table = (table) => {
  return  {
    type: types.SET_200206_TABLE,
    table
  }
}

export const Set200206Total = (total) => ({
  type: types.SET_200206_TOTAL,
  total
})

export const Set200206Limit = (limit) => ({
  type: types.SET_200206_LIMIT,
  limit
})

export const Set200206Skip = (skip) => ({
  type: types.SET_200206_SKIP,
  skip
})

export const Set200206Data = (data) => ({
  type: types.SET_200206_DATA,
  data
})

//SAGAS
export const Sproc200221Create = (startDate,endDate,fetch,limit,route,setSubmittingOff) => ({
  type: types.SPROC200221_CREATE,
  startDate,
  endDate,
  fetch,
  limit,
  route,
  setSubmittingOff
})


export const Sproc200221Fetch = (sprocName,tableName,limit,skip,route,setSubmittingOff) => ({
  type: types.SPROC200221_FETCH,
  sprocName,
  tableName,
  limit,
  skip,
  route,
  setSubmittingOff
})


export const Set200221Sproc = (sproc) => ({
  type: types.SET_200221_SPROC,
  sproc
})

export const Set200221Table = (table) => {
  return  {
    type: types.SET_200221_TABLE,
    table
  }
}

export const Set200221Total = (total) => ({
  type: types.SET_200221_TOTAL,
  total
})

export const Set200221Limit = (limit) => ({
  type: types.SET_200221_LIMIT,
  limit
})

export const Set200221Skip = (skip) => ({
  type: types.SET_200221_SKIP,
  skip
})

export const Set200221Data = (data) => ({
  type: types.SET_200221_DATA,
  data
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

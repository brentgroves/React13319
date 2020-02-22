import * as types from '../constants/ActionTypes'
import * as errorType from '../constants/ErrorType'
import * as errorSeverity from '../constants/ErrorSeverity'
var curr = new Date; // get current date
var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
var last = first + 6; // last day is the first day + 6
var firstDayOfWeek = new Date(curr.setDate(first)).toString();
var lastDayOfWeek= new Date(curr.setDate(last)).toString();

const initState = {
  isSubmitting: false,
  firstDayOfWeek: firstDayOfWeek,
  lastDayOfWeek: lastDayOfWeek,
  error: {
    error:false,
    message:"",
    type: errorType.NONE,
    severity:errorSeverity.NONE
  }
}


const Global = (state = initState, action) => {
  switch (action.type) {
    case types.IS_SUBMITTING:
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         isSubmitting: action.isSubmitting
       })
    }
    case types.SET_ERROR:
    {
      return Object.assign({}, state, {
        error: true,
        message: action.message,
        type: action.type,
        severity: action.severity
      })
    }
    case types.CLEAR_ERROR:
    {
      return Object.assign({}, state, {
        error: false,
        message: "",
        type: errorType.NONE,
        severity: errorSeverity.NONE
      })
    }
    default:
      return state
  }
}

export default Global

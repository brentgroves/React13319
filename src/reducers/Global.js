import * as types from '../constants/ActionTypes'
import * as errorType from '../constants/ErrorType'
import * as errorSeverity from '../constants/ErrorSeverity'
import { log } from "../utils/log";
import { FirstDayWeek,LastDayWeek,FirstDayMonth,LastDayMonth} from "../utils/dates";

var today = new Date();
var firstDayOfWeek = FirstDayWeek(today);
var lastDayOfWeek = LastDayWeek(today);
var firstDayOfMonth = FirstDayMonth(today);
var lastDayOfMonth = LastDayMonth(today);
log(`today: ${today},firstDayOfWeek:${firstDayOfWeek},lastDayOfWeek:${lastDayOfWeek},firstDayOfMonth:${firstDayOfMonth},lastDayOfMonth:${lastDayOfMonth}`);

const initState = {
  submitting: false,
  firstDayOfWeek,
  lastDayOfWeek,
  firstDayOfMonth,
  lastDayOfMonth,
  appError: {
    error:false,
    message:"",
    errorType: errorType.NONE,
    severity:errorSeverity.NONE
  }
}
/*
error: {
  error:false,
  message:"",
  type: errorType.NONE,
  severity:errorSeverity.NONE
}
*/
const Global = (state = initState, action) => {
  switch (action.type) {
    case types.SUBMITTING:
    {
      // Keep a reference to the service object created in sockets initialization code.
      return Object.assign({}, state, {
         submitting: action.submitting
       })
    }
    case types.SET_APP_ERROR:
    {
      return {
        ...state,
        appError: {
          ...state.appError,
          error:true,
          message:action.message,
          errorType: errorType.NONE,
          severity:errorSeverity.NONE
        }
      }

    }
    case types.CLEAR_APP_ERROR:
    {
      return {
        ...state,
        appError: {
          ...state.appError,
          error:false,
          message:"",
          errorType: errorType.NONE,
          severity:errorSeverity.NONE
        }
      }
    }
    default:
      return state
  }
}

export default Global

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
var firstDayOfQuarter = FirstDayQuarter(today);
var lastDayOfQuarter = LastDayQuarter(today);
log(`today: ${today},firstDayOfWeek:${firstDayOfWeek},lastDayOfWeek:${lastDayOfWeek},firstDayOfMonth:${firstDayOfMonth},lastDayOfMonth:${lastDayOfMonth}`);

const initState = {
  submitting: false,  // Used by forms/dialogs to disable buttons when saga is running.
  firstDayOfWeek,
  lastDayOfWeek,
  firstDayOfMonth,
  lastDayOfMonth,
  firstDayOfQuarter,
  lastDayOfQuarter,
  appError: {  // Used by SnackBar in App.js to show any message to user.
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

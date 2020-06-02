import * as types from '../constants/ActionTypes'
import * as errorType from '../constants/ErrorType'
import * as errorSeverity from '../constants/ErrorSeverity'
import { log } from "../utils/log";
import { firstOfWeek, endOfWeek } from "../utils/dates";

//dt = new Date(); 

//console.log(endOfWeek(dt).toString());


//var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
//var last = curr.getDate() - curr.getDay() + 6; 
//var last = date.getDate() - (date.getDay() - 1) + 6;
//var lastday = date.getDate() - (date.getDay() - 1) + 6;
// var last = first + 6; // last day is the first day + 6
//var firstDayOfWeek = new Date(curr.setDate(first)).toString();
// var lastDayOfWeek= new Date(curr.setDate(last)).toString();
var firstDayOfWeek = firstOfWeek(new Date());
var lastDayOfWeek = endOfWeek(new Date());
var curr = new Date(); // get current date
// This section is wrong. Replace with a function.
var firstDayOfMonth = new Date(curr.getFullYear(), curr.getMonth(), 1);
var lastDayOfMonth = new Date(curr.getFullYear(), curr.getMonth() + 1, 0);
log(`cur: ${curr},firstDayOfWeek:${firstDayOfWeek},lastDayOfWeek:${lastDayOfWeek}`);
function addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000);
}

lastDayOfMonth = addDays(lastDayOfMonth, 1);
// last millisecond of previous date
lastDayOfMonth = new Date(lastDayOfMonth.getTime() - 1);

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

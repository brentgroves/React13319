import * as types from '../constants/ActionTypes'

var curr = new Date; // get current date
var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
var last = first + 6; // last day is the first day + 6
var firstDayOfWeek = new Date(curr.setDate(first)).toString();
var lastDayOfWeek= new Date(curr.setDate(last)).toString();

const initState = {
  isSubmitting: false,
  firstDayOfWeek: firstDayOfWeek,
  lastDayOfWeek: lastDayOfWeek
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
    default:
      return state
  }
}

export default Global

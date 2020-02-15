import * as types from "../constants/ActionTypes";

const initState = {
  total: 0,
  limit: 0,
  skip: 0,
  data: []
};

const HourlyOEEValues = (state = initState, action) => {
  switch (action.type) {
    case types.SET_HOURLY_OEE_VALUES_TOTAL: {
      return {
        ...state,
        total: action.total
      };
    }
    case types.SET_HOURLY_OEE_VALUES_LIMIT: {
      return {
        ...state,
        limit: action.limit
      };
    }
    case types.SET_HOURLY_OEE_VALUES_SKIP: {
      return {
        ...state,
        skip: action.skip
      };
    }
    case types.SET_HOURLY_OEE_VALUES_DATA: {
      return {
        ...state,
        data: action.data
      };
    }
    /*
    TWO Options to add item to array
    case ADD_ITEM :
    return {
        ...state,
        arr: [...state.arr, action.newItem]
    }
    case ADD_ITEM :
    return {
        ...state,
        arr: state.arr.concat(action.newItem)
    }
    */
    default:
      return state

  }
};
export default HourlyOEEValues;

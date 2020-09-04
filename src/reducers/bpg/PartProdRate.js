import * as types from "../../constants/ActionTypes";

const initState = {
  start_period: 0,
  end_period:0,
  total: 0,  // total number of records in dataset
  limit: 0,  // how many records returned in one call
  skip: 0,
  data: []  // dataset returned by fetch.
};

const PartProdRate = (state = initState, action) => {
  switch (action.type) {

    case types.SET_PART_PROD_RATE_START_PERIOD: {
      return {
        ...state,
        start_period: action.start_period
      };
    }

    case types.SET_PART_PROD_RATE_END_PERIOD: {
      return {
        ...state,
        end_period: action.end_period
      };
    }


    case types.SET_PART_PROD_RATE_TOTAL: {
      return {
        ...state,
        total: action.total
      };
    }
    case types.SET_PART_PROD_RATE_LIMIT: {
      return {
        ...state,
        limit: action.limit
      };
    }
    case types.SET_PART_PROD_RATE_SKIP: {
      return {
        ...state,
        skip: action.skip
      };
    }
    case types.SET_PART_PROD_RATE_DATA: {
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
export default PartProdRate;

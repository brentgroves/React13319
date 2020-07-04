import * as types from "../../constants/ActionTypes";

const initState = {
  sproc: '',
  table: '',
  total: 0,  // total number of records in dataset
  limit: 0,  // how many records returned in one SPROC call
  skip: 0,
  data: []  // dataset returned by SPROC call.
};

const Sproc200206 = (state = initState, action) => {
  switch (action.type) {
    case types.SET_200206_SPROC: {
      return {
        ...state,
        sproc: action.sproc
      }
    }
    case types.SET_200206_TABLE: {
      return {
        ...state,
        table: action.table
      }
    }
    case types.SET_200206_TOTAL: {
      return {
        ...state,
        total: action.total
      };
    }
    case types.SET_200206_LIMIT: {
      return {
        ...state,
        limit: action.limit
      };
    }
    case types.SET_200206_SKIP: {
      return {
        ...state,
        skip: action.skip
      };
    }
    case types.SET_200206_DATA: {
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
export default Sproc200206;

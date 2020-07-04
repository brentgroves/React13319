import * as types from "../../constants/ActionTypes";

const initState = {
  sproc: '',
  table: '',
  total: 0,
  limit: 0,
  skip: 0,
  data: []
};

const Sproc200221 = (state = initState, action) => {
  switch (action.type) {
    case types.SET_200221_SPROC: {
      return {
        ...state,
        sproc: action.sproc
      }
    }
    case types.SET_200221_TABLE: {
      return {
        ...state,
        table: action.table
      }
    }
    case types.SET_200221_TOTAL: {
      return {
        ...state,
        total: action.total
      };
    }
    case types.SET_200221_LIMIT: {
      return {
        ...state,
        limit: action.limit
      };
    }
    case types.SET_200221_SKIP: {
      return {
        ...state,
        skip: action.skip
      };
    }
    case types.SET_200221_DATA: {
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
export default Sproc200221;

import * as types from "../constants/ActionTypes";

const initState = {
  sprocName: '',
  tableName: '',
  total: 0,
  limit: 0,
  skip: 0,
  data: []
};

const Sproc = (state = initState, action) => {
  switch (action.type) {
    case types.SET_SPROC_NAME: {
      return {
        ...state,
        sprocName: action.sprocName
      }
    }
    case types.SET_TABLE_NAME: {
      return {
        ...state,
        tableName: action.tableName
      }
    }
    case types.SET_QUERY_TOTAL: {
      return {
        ...state,
        total: action.total
      };
    }
    case types.SET_QUERY_LIMIT: {
      return {
        ...state,
        limit: action.limit
      };
    }
    case types.SET_QUERY_SKIP: {
      return {
        ...state,
        skip: action.skip
      };
    }
    case types.SET_QUERY_DATA: {
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
export default Sproc;

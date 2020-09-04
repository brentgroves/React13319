import * as types from "../../constants/ActionTypes";

const initState = {
  Building_Key: 0,
  Building_Code: '',
  sproc: '',
  table: '',
  total: 0,
  limit: 0,
  skip: 0,
  data: []
};

const UpcomingToolChanges = (state = initState, action) => {
  switch (action.type) {
    case types.SET_UPCOMING_TOOL_CHANGES_BUILDING_KEY: {
      return {
        ...state,
        Building_Key: action.Building_Key
      }
    }
    case types.SET_UPCOMING_TOOL_CHANGES_BUILDING_CODE: {
      return {
        ...state,
        Building_Code: action.Building_Code
      }
    }
    case types.SET_UPCOMING_TOOL_CHANGES_SPROC: {
      return {
        ...state,
        sproc: action.sproc
      }
    }
    case types.SET_UPCOMING_TOOL_CHANGES_TABLE: {
      return {
        ...state,
        table: action.table
      }
    }
    case types.SET_UPCOMING_TOOL_CHANGES_TOTAL: {
      return {
        ...state,
        total: action.total
      };
    }
    case types.SET_UPCOMING_TOOL_CHANGES_LIMIT: {
      return {
        ...state,
        limit: action.limit
      };
    }
    case types.SET_UPCOMING_TOOL_CHANGES_SKIP: {
      return {
        ...state,
        skip: action.skip
      };
    }
    case types.SET_UPCOMING_TOOL_CHANGES_DATA: {
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
export default UpcomingToolChanges;

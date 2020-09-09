import * as types from "../../constants/ActionTypes";

const initState = {
  openDialogToolChangeSummary: false,
  startDate: '2020-09-08 00:00:00',
  endDate: '2020-09-08 00:00:00',
  sproc: '',
  table: '',
  total: 0,
  limit: 0,
  skip: 0,
  data: []
};

const ToolChangeSummary = (state = initState, action) => {
  switch (action.type) {
    case types.OPEN_DIALOG_TOOL_CHANGE_SUMMARY: {
      return {
        ...state,
        openDialogToolChangeSummary: action.open
      }
    }
    case types.SET_TOOL_CHANGE_SUMMARY_START_DATE: {
      return {
        ...state,
        startDate: action.startDate
      }
    }
    case types.SET_TOOL_CHANGE_SUMMARY_END_DATE: {
      return {
        ...state,
        endDate: action.endDate
      }
    }
    case types.SET_TOOL_CHANGE_SUMMARY_SPROC: {
      return {
        ...state,
        sproc: action.sproc
      }
    }
    case types.SET_TOOL_CHANGE_SUMMARY_TABLE: {
      return {
        ...state,
        table: action.table
      }
    }
    case types.SET_TOOL_CHANGE_SUMMARY_TOTAL: {
      return {
        ...state,
        total: action.total
      };
    }
    case types.SET_TOOL_CHANGE_SUMMARY_LIMIT: {
      return {
        ...state,
        limit: action.limit
      };
    }
    case types.SET_TOOL_CHANGE_SUMMARY_SKIP: {
      return {
        ...state,
        skip: action.skip
      };
    }
    case types.SET_TOOL_CHANGE_SUMMARY_DATA: {
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
export default ToolChangeSummary;

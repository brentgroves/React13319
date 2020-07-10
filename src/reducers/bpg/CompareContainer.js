import * as types from "../../constants/ActionTypes";

const initState = {
  openCompareContainerDialog: false,
  total: 0,  // total number of records in dataset
  limit: 0,  // how many records returned in one call
  skip: 0,
  data: []  // dataset returned by fetch.
};

const CompareContainer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_COMPARE_CONTAINER_TOTAL: {
      return {
        ...state,
        total: action.total
      };
    }
    case types.SET_COMPARE_CONTAINER_LIMIT: {
      return {
        ...state,
        limit: action.limit
      };
    }
    case types.SET_COMPARE_CONTAINER_SKIP: {
      return {
        ...state,
        skip: action.skip
      };
    }
    case types.SET_COMPARE_CONTAINER_DATA: {
      return {
        ...state,
        data: action.data
      };
    }
    case types.OPEN_COMPARE_CONTAINER_DIALOG: {
      return {
        ...state,
        openCompareContainerDialog: action.open
      }
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
export default CompareContainer;

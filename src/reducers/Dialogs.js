import * as types from "../constants/ActionTypes";

const initState = {
  openSproc200206Dialog: false
};

const Dialogs = (state = initState, action) => {
  switch (action.type) {
    case types.OPEN_SPROC200206_DIALOG: {
      return {
        ...state,
        openSproc200206Dialog: action.open
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
export default Dialogs;

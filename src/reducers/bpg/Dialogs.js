import * as types from "../../constants/ActionTypes";

const initState = {
  openDialog200206: false
};

const Dialogs = (state = initState, action) => {
  switch (action.type) {
    case types.OPEN_DIALOG_200206: {
      return {
        ...state,
        openDialog200206: action.open
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

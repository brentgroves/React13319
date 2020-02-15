import * as types from '../constants/ActionTypes'
const Kep13318 = (state = [], action) => {
  switch (action.type) {
    case 'RCV_KEP13318':
    case 'ADD_KEP13318':
    {
      return state.concat(action.text)
    }
    default:
      return state
  }
}

export default Kep13318

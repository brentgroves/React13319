import * as types from '../constants/ActionTypes'
const ds13318 = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DS13318':
    {
      return state.concat(action.records)
    }
    default:
      return state
  }
}

export default ds13318

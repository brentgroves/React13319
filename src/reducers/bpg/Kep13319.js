import * as types from '../../constants/ActionTypes';
const config = require('../../config/config.json');

const Kep13319 = (state = config, action) => {
  switch (action.type) {
    case types.UPDATE_NODE: {
      return {
        ...state,
        nodes: state.nodes.map((node, i) =>
          i === action.updateId ? { ...node, value: action.value, transDate: action.transDate} : node,
        ),
      };
    }
    case types.SET_NODES: {
      return {
        ...state,
        nodes: action.nodes,
      };
    }
    default:
      return state;
  }
};

export default Kep13319;

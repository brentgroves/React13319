import * as types from '../../constants/ActionTypes';

// Kep13319 Reducer
export const Kep13319Fetch = (route, setSubmittingOff) => ({
  type: types.KEP13319_FETCH,
  route,
  setSubmittingOff,
});

export const SetNodes = (nodes) => ({
  type: types.SET_NODES,
  nodes,
});

export const UpdateNode = (updateId, value) => ({
  type: types.UPDATE_NODE,
  updateId,
  value,
});


import * as types from '../../constants/ActionTypes';
//SAGAS
export const Sproc200221Create = (
  startDate,
  endDate,
  fetch,
  limit,
  route,
  setSubmittingOff,
) => ({
  type: types.SPROC200221_CREATE,
  startDate,
  endDate,
  fetch,
  limit,
  route,
  setSubmittingOff,
});

export const Sproc200221Fetch = (
  sproc,
  table,
  limit,
  skip,
  route,
  setSubmittingOff,
) => ({
  type: types.SPROC200221_FETCH,
  sproc,
  table,
  limit,
  skip,
  route,
  setSubmittingOff,
});

export const Set200221Sproc = (sproc) => ({
  type: types.SET_200221_SPROC,
  sproc,
});

export const Set200221Table = (table) => {
  return {
    type: types.SET_200221_TABLE,
    table,
  };
};

export const Set200221Total = (total) => ({
  type: types.SET_200221_TOTAL,
  total,
});

export const Set200221Limit = (limit) => ({
  type: types.SET_200221_LIMIT,
  limit,
});

export const Set200221Skip = (skip) => ({
  type: types.SET_200221_SKIP,
  skip,
});

export const Set200221Data = (data) => ({
  type: types.SET_200221_DATA,
  data,
});


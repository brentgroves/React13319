import * as types from '../../constants/ActionTypes';
export const Sproc200206Create = (
  startDate,
  endDate,
  fetch,
  limit,
  route,
  setSubmittingOff,
) => ({
  type: types.SPROC200206_CREATE,
  startDate,
  endDate,
  fetch,
  limit,
  route,
  setSubmittingOff,
});

export const Sproc200206Fetch = (
  sproc,
  table,
  limit,
  skip,
  route,
  setSubmittingOff,
) => ({
  type: types.SPROC200206_FETCH,
  sproc,
  table,
  limit,
  skip,
  route,
  setSubmittingOff,
});

export const Set200206Sproc = (sproc) => ({
  type: types.SET_200206_SPROC,
  sproc,
});

export const Set200206Table = (table) => {
  return {
    type: types.SET_200206_TABLE,
    table,
  };
};

export const Set200206Total = (total) => ({
  type: types.SET_200206_TOTAL,
  total,
});

export const Set200206Limit = (limit) => ({
  type: types.SET_200206_LIMIT,
  limit,
});

export const Set200206Skip = (skip) => ({
  type: types.SET_200206_SKIP,
  skip,
});

export const Set200206Data = (data) => ({
  type: types.SET_200206_DATA,
  data,
});


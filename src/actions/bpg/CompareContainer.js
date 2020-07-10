import * as types from '../../constants/ActionTypes';

export const CompareContainerFetch = (
  startDate,
  endDate,
  limit,
  skip,
  route,
  setSubmittingOff,
) => ({
  type: types.COMPARE_CONTAINER_FETCH,
  startDate,
  endDate,
  limit,
  skip,
  route,
  setSubmittingOff,
});

export const SetCompareContainerTable = (table) => {
  return {
    type: types.SET_COMPARE_CONTAINER_TABLE,
    table,
  };
};

export const SetCompareContainerTotal = (total) => ({
  type: types.SET_COMPARE_CONTAINER_TOTAL,
  total,
});

export const SetCompareContainerLimit = (limit) => ({
  type: types.SET_COMPARE_CONTAINER_LIMIT,
  limit,
});

export const SetCompareContainerSkip = (skip) => ({
  type: types.SET_COMPARE_CONTAINER_SKIP,
  skip,
});

export const SetCompareContainerData = (data) => ({
  type: types.SET_COMPARE_CONTAINER_DATA,
  data,
});

export const OpenCompareContainerDialog = (open) => ({
  type: types.OPEN_COMPARE_CONTAINER_DIALOG,
  open,
});


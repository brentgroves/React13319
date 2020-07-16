import * as types from '../../constants/ActionTypes';

export const PartProdRateFetch = (
  startPeriod,
  endPeriod,
  limit,
  skip,
  route,
  setSubmittingOff,
) => ({
  type: types.PART_PROD_RATE_FETCH,
  startPeriod,
  endPeriod,
  limit,
  skip,
  route,
  setSubmittingOff,
});

export const SetPartProdRateTotal = (total) => ({
  type: types.SET_PART_PROD_RATE_TOTAL,
  total,
});

export const SetPartProdRateLimit = (limit) => ({
  type: types.SET_PART_PROD_RATE_LIMIT,
  limit,
});

export const SetPartProdRateSkip = (skip) => ({
  type: types.SET_PART_PROD_RATE_SKIP,
  skip,
});

export const SetPartProdRateData = (data) => ({
  type: types.SET_PART_PROD_RATE_DATA,
  data,
});



import * as types from '../../constants/ActionTypes';
//SAGAS

export const OpenDialogToolChangeSummary = (open) => ({
  type: types.OPEN_DIALOG_TOOL_CHANGE_SUMMARY,
  open,
});

export const CreateToolChangeSummary = (
  startDate,
  endDate,
  fetch,
  limit,
  route,
  setSubmittingOff,
) => ({
  type: types.CREATE_TOOL_CHANGE_SUMMARY,
  startDate,
  endDate,
  fetch,
  limit,
  route,
  setSubmittingOff,
});

export const FetchToolChangeSummary = (
  table,
  limit,
  skip,
  route,
  setSubmittingOff,
) => ({
  type: types.FETCH_TOOL_CHANGE_SUMMARY,
  table,
  limit,
  skip,
  route,
  setSubmittingOff,
});

export const SetToolChangeSummaryStartDate = (startDate) => ({
  type: types.SET_TOOL_CHANGE_SUMMARY_START_DATE,
  startDate,
});

export const SetToolChangeSummaryEndDate = (endDate) => ({
  type: types.SET_TOOL_CHANGE_SUMMARY_END_DATE,
  endDate,
});



export const SetToolChangeSummarySproc = (sproc) => ({
  type: types.SET_TOOL_CHANGE_SUMMARY_SPROC,
  sproc,
});

export const SetToolChangeSummaryTable = (table) => {
  return {
    type: types.SET_TOOL_CHANGE_SUMMARY_TABLE,
    table,
  };
};

export const SetToolChangeSummaryTotal = (total) => ({
  type: types.SET_TOOL_CHANGE_SUMMARY_TOTAL,
  total,
});

export const SetToolChangeSummaryLimit = (limit) => ({
  type: types.SET_TOOL_CHANGE_SUMMARY_LIMIT,
  limit,
});

export const SetToolChangeSummarySkip = (skip) => ({
  type: types.SET_TOOL_CHANGE_SUMMARY_SKIP,
  skip,
});

export const SetToolChangeSummaryData = (data) => ({
  type: types.SET_TOOL_CHANGE_SUMMARY_DATA,
  data,
});


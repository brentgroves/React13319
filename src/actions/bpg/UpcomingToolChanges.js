import * as types from '../../constants/ActionTypes';
//SAGAS
export const UpcomingToolChangesCreate = (
  Building_Key,
  fetch,
  limit,
  route,
  setSubmittingOff,
) => ({
  type: types.UPCOMING_TOOL_CHANGES_CREATE,
  Building_Key,
  fetch,
  limit,
  route,
  setSubmittingOff,
});

export const UpcomingToolChangesFetch = (
  table,
  limit,
  skip,
  route,
  setSubmittingOff,
) => ({
  type: types.UPCOMING_TOOL_CHANGES_FETCH,
  table,
  limit,
  skip,
  route,
  setSubmittingOff,
});

export const SetUpcomingToolChangesBuildingKey = (Building_Key) => ({
  type: types.SET_UPCOMING_TOOL_CHANGES_BUILDING_KEY,
  Building_Key,
});

export const SetUpcomingToolChangesBuildingCode = (Building_Code) => ({
  type: types.SET_UPCOMING_TOOL_CHANGES_BUILDING_CODE,
  Building_Code,
});


export const SetUpcomingToolChangesSproc = (sproc) => ({
  type: types.SET_UPCOMING_TOOL_CHANGES_SPROC,
  sproc,
});

export const SetUpcomingToolChangesTable = (table) => {
  return {
    type: types.SET_UPCOMING_TOOL_CHANGES_TABLE,
    table,
  };
};

export const SetUpcomingToolChangesTotal = (total) => ({
  type: types.SET_UPCOMING_TOOL_CHANGES_TOTAL,
  total,
});

export const SetUpcomingToolChangesLimit = (limit) => ({
  type: types.SET_UPCOMING_TOOL_CHANGES_LIMIT,
  limit,
});

export const SetUpcomingToolChangesSkip = (skip) => ({
  type: types.SET_UPCOMING_TOOL_CHANGES_SKIP,
  skip,
});

export const SetUpcomingToolChangesData = (data) => ({
  type: types.SET_UPCOMING_TOOL_CHANGES_DATA,
  data,
});


import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as actions from '../actions';
import * as types from '../constants/ActionTypes';
import * as errorType from '../constants/ErrorType';
import * as errorSeverity from '../constants/ErrorSeverity';
import * as common from '@bgroves/common';
// const common = require('@bgroves/common');
var g_services;
var g_dispatch;

// Not tested.
// Currently handleView200206 calls this create service.
// Generator function
export function* handleUpcomingToolChangesCreate(action) {
  common.log('in handleUpcomingToolChangesCreate');
  common.log(
    `startDate : ${action.Building_Key}, fetch: ${action.fetch}, limit:${action.limit}, route:${action.route}, setSubmittingOff:${action.setSubmittingOff}`,
  );
  const srvUpcomingToolChanges = process.env.REACT_APP_FEATHERS_UPCOMING_TOOL_CHANGES_SERVICE;
  const sproc = process.env.REACT_APP_UPCOMING_TOOL_CHANGES_SPROC;
  try {
    var res = yield g_services.service(srvUpcomingToolChanges).create({
      //        tableName: tableName,
      Building_Key: action.Building_Key
    });
    common.log(`res: ${res}`);
    g_dispatch(actions.SetUpcomingToolChangesSproc(sproc));
    g_dispatch(actions.SetUpcomingToolChangesTable(res.table));
    g_dispatch(actions.SetUpcomingToolChangesTotal(res.record_count));
    g_dispatch(actions.SetUpcomingToolChangesLimit(action.limit));
    g_dispatch(actions.SetUpcomingToolChangesSkip(0));
    if (action.fetch) {
      g_dispatch(
        actions.UpcomingToolChangesFetch(
          res.table,
          action.limit,
          0,
          action.route,
          action.setSubmittingOff,
        ),
      );
    }
    if (!action.fetch && action.route) {
      yield put(push(action.route));
    }
    if (!action.fetch && action.setSubmittingOff) {
      g_dispatch(actions.Submitting(false));
    }
    //    var error = new Error("The error message");
  } catch (err) {
    common.log(err);
    g_dispatch(
      actions.SetAppError(err.message, errorType.SAGA, errorSeverity.LOW),
    );
  }
}

export function* handleUpcomingToolChangesFetch(action) {
  common.log('in handleUpcomingToolChangesFetch');
  //  const {Sproc} = g_store;
  common.log(
    `table: ${action.table}, limit: ${action.limit},skip: ${action.skip}, route: ${action.route},setSubmittingOff:${action.setSubmittingOff} `,
  );
  const srvUpcomingToolChanges = process.env.REACT_APP_FEATHERS_UPCOMING_TOOL_CHANGES_SERVICE;

  try {
    var res = yield g_services.service(srvUpcomingToolChanges).find({
      query: {
        $table: action.table,
        $limit: action.limit,
        $skip: action.skip,
        $sort: {
          ID: 1,
        },
      },
    });
    common.log(res);
    g_dispatch(actions.SetUpcomingToolChangesData(res));
    g_dispatch(actions.SetUpcomingToolChangesSkip(action.skip));
    if (action.route) {
      yield put(push(action.route));
    }
    if (action.setSubmittingOff) {
      g_dispatch(actions.Submitting(false));
    }
  } catch (err) {
    common.log(err);
    g_dispatch(
      actions.SetAppError(err.message, errorType.SAGA, errorSeverity.LOW),
    );
  }
}

export function* watchUpcomingToolChangesCreate() {
  yield takeEvery(types.UPCOMING_TOOL_CHANGES_CREATE, handleUpcomingToolChangesCreate);
}

export function* watchUpcomingToolChangesFetch() {
  yield takeEvery(types.UPCOMING_TOOL_CHANGES_FETCH, handleUpcomingToolChangesFetch);
}

export function setSAGA(services, dispatch) {
  g_services = services;
  g_dispatch = dispatch;
}

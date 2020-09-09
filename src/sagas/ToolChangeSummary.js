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
export function* handleCreateToolChangeSummary(action) {
  common.log('in handleCreateToolChangeSummary');
  common.log(
    `startDate : ${action.startDate},endDate: ${action.endDate} fetch: ${action.fetch}, limit:${action.limit}, route:${action.route}, setSubmittingOff:${action.setSubmittingOff}`,
  );
  const srvToolChangeSummary = process.env.REACT_APP_FEATHERS_TOOL_CHANGE_SUMMARY_SERVICE;
  const sproc = process.env.REACT_APP_CREATE_TOOL_CHANGE_SUMMARY_SPROC;
  try {
    var res = yield g_services.service(srvToolChangeSummary).create({
      //        tableName: tableName,
      startDate: action.startDate,
      endDate: action.endDate
    });
    common.log(`res: ${res}`);
    g_dispatch(actions.SetToolChangeSummaryStartDate(action.startDate))
    g_dispatch(actions.SetToolChangeSummaryEndDate(action.endDate))
    g_dispatch(actions.SetToolChangeSummarySproc(sproc));
    g_dispatch(actions.SetToolChangeSummaryTable(res.table));
    g_dispatch(actions.SetToolChangeSummaryTotal(res.record_count));
    g_dispatch(actions.SetToolChangeSummaryLimit(action.limit));
    g_dispatch(actions.SetToolChangeSummarySkip(0));
    if (action.fetch) {
      g_dispatch(
        actions.FetchToolChangeSummary(
          res.table,
          action.limit,
          0,
          action.route,
          action.setSubmittingOff
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

export function* handleFetchToolChangeSummary(action) {
  common.log('in handleFetchToolChangeSummary');
  //  const {Sproc} = g_store;
  common.log(
    `table: ${action.table}, limit: ${action.limit},skip: ${action.skip}, route: ${action.route},setSubmittingOff:${action.setSubmittingOff} `,
  );
  const srvToolChangeSummary = process.env.REACT_APP_FEATHERS_TOOL_CHANGE_SUMMARY_SERVICE;

  try {
    var res = yield g_services.service(srvToolChangeSummary).find({
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
    g_dispatch(actions.SetToolChangeSummaryData(res));
    g_dispatch(actions.SetToolChangeSummarySkip(action.skip));
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

export function* watchCreateToolChangeSummary() {
  yield takeEvery(types.CREATE_TOOL_CHANGE_SUMMARY, handleCreateToolChangeSummary);
}

export function* watchFetchToolChangeSummary() {
  yield takeEvery(types.FETCH_TOOL_CHANGE_SUMMARY, handleFetchToolChangeSummary);
}

export function setSAGA(services, dispatch) {
  g_services = services;
  g_dispatch = dispatch;
}

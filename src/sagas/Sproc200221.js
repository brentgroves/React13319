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
// I don't think this is used at the moment.
// Currently handleView200206 calls this create service.
// Generator function
export function* handleSproc200221Create(action) {
  common.log('in handleSproc200221Create');
  common.log(
    `startDate : ${action.startDate}, endDate: ${action.endDate}, fetch: ${action.fetch}, limit:${action.limit}, route:${action.route}, setSubmittingOff:${action.setSubmittingOff}`,
  );
  const srv200221 = process.env.REACT_APP_FEATHERS_200221_SERVICE;
  try {
    var res = yield g_services.service(srv200221).create({
      //        tableName: tableName,
      startDate: action.startDate,
      endDate: action.endDate,
      fetch: action.fetch,
      limit: action.limit,
    });
    common.log(`res: ${res}`);
    g_dispatch(actions.Set200221Sproc(srv200221));
    g_dispatch(actions.Set200221Table(res.table));
    g_dispatch(actions.Set200221Total(res.record_count));
    g_dispatch(actions.Set200221Limit(action.limit));
    g_dispatch(actions.Set200221Skip(0));
    if (action.fetch) {
      g_dispatch(
        actions.Sproc200221Fetch(
          srv200221,
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

export function* handleSproc200221Fetch(action) {
  common.log('in handleSproc200221Fetch');
  //  const {Sproc} = g_store;
  common.log(
    `sproc: ${action.sproc}, limit: ${action.limit},skip: ${action.skip}, table: ${action.table},route: ${action.route},setSubmittingOff:${action.setSubmittingOff} `,
  );
  try {
    var res = yield g_services.service(action.sproc).find({
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
    g_dispatch(actions.Set200221Data(res));
    g_dispatch(actions.Set200221Skip(action.skip));
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

export function* watchSproc200221Create() {
  yield takeEvery(types.SPROC200221_CREATE, handleSproc200221Create);
}

export function* watchSproc200221Fetch() {
  yield takeEvery(types.SPROC200221_FETCH, handleSproc200221Fetch);
}

export function setSAGA(services, dispatch) {
  g_services = services;
  g_dispatch = dispatch;
}

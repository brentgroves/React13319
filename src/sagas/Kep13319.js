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

export function* handleKep13319Fetch(action) {
  common.log('in handleKep13319Fetch');
  common.log(
    `route: ${action.route},setSubmittingOff:${action.setSubmittingOff} `,
  );
  try {
    var nodes = yield g_services.service('kep13319').find({
      query: {
        $sort: {
          ID: 1,
        },
      },
    });
    //    common.log(res);
    g_dispatch(actions.SetNodes(nodes));
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

export function* watchKep13319Fetch() {
  yield takeEvery(types.KEP13319_FETCH, handleKep13319Fetch);
}

export function setSAGA(services, dispatch) {
  g_services = services;
  g_dispatch = dispatch;
}

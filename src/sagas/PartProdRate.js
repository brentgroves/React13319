import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as actions from '../actions';
import * as types from '../constants/ActionTypes';
import * as errorType from '../constants/ErrorType';
import * as errorSeverity from '../constants/ErrorSeverity';
import * as common from '@bgroves/common';

var g_services;
var g_dispatch;

export function* handlePartProdRateFetch(action) {
  common.log('in handlePartProdRateFetch');
   common.log(
      `startPeriod:${action.startPeriod},endPeriod:${action.endPeriod},limit: ${action.limit},skip: ${action.skip}, route: ${action.route},setSubmittingOff:${action.setSubmittingOff} `,
    );
    try {
      var res = yield g_services.service('part-prod-rate').find({
        query: {
          $startPeriod: action.startPeriod,
          $endPeriod: action.endPeriod,
          $limit: action.limit,
          $skip: action.skip,
          $sort: {
            ID: 1,
          },
        },
      });
      //    common.log(res);
      g_dispatch(actions.SetPartProdRateTotal(res.record_count));
      g_dispatch(actions.SetPartProdRateLimit(action.limit));
      g_dispatch(actions.SetPartProdRateSkip(action.skip));
      g_dispatch(actions.SetPartProdRateData(res.data));
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
export function* watchPartProdRateFetch() {
  yield takeEvery(types.PART_PROD_RATE_FETCH, handlePartProdRateFetch);
}

export function setSAGA(services, dispatch) {
  g_services = services;
  g_dispatch = dispatch;
}

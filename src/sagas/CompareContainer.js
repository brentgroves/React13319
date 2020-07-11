import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as actions from '../actions';
import * as types from '../constants/ActionTypes';
import * as errorType from '../constants/ErrorType';
import * as errorSeverity from '../constants/ErrorSeverity';
import * as common from '@bgroves/common';

var g_services;
var g_dispatch;

export function* handleCompareContainerFetch(action) {
  common.log('in handleCompareContainerFetch');
   common.log(
      `startDate:${action.startDate},endDate:${action.endDate},limit: ${action.limit},skip: ${action.skip}, route: ${action.route},setSubmittingOff:${action.setSubmittingOff} `,
    );
    try {
      var res = yield g_services.service('CompareContainer').find({
        query: {
          $startDate: action.startDate,
          $endDate: action.endDate,
          $limit: action.limit,
          $skip: action.skip,
          $sort: {
            ID: 1,
          },
        },
      });
      //    common.log(res);
      g_dispatch(actions.SetCompareContainerTotal(res.record_count));
      g_dispatch(actions.SetCompareContainerLimit(action.limit));
      g_dispatch(actions.SetCompareContainerSkip(action.skip));
      g_dispatch(actions.SetCompareContainerData(res.data));
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
export function* watchCompareContainerFetch() {
  yield takeEvery(types.COMPARE_CONTAINER_FETCH, handleCompareContainerFetch);
}

export function setSAGA(services, dispatch) {
  g_services = services;
  g_dispatch = dispatch;
}

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

/* 
 This is called from a visualization menu item click
 */
export function* handleView200206(action) {
  common.log('in handleView200206');
  common.log(
    `process.env.REACT_APP_FEATHERS_200206_SERVICE:${process.env.REACT_APP_FEATHERS_200206_SERVICE}`,
  );
  common.log(
    `process.env.REACT_APP_FEATHERS_200221_SERVICE:${process.env.REACT_APP_FEATHERS_200221_SERVICE}`,
  );
  common.log(
    `startDate : ${action.startDate}, endDate: ${action.endDate}, limit:${action.limit}, route:${action.route}, setSubmittingOff:${action.setSubmittingOff}`,
  );
  try {
    const srv200206 = process.env.REACT_APP_FEATHERS_200206_SERVICE;
    const srv200221 = process.env.REACT_APP_FEATHERS_200221_SERVICE;
    // Creates the table to scroll through but does not return the dataset
    var res1 = yield g_services.service(srv200206).create({
      //        tableName: tableName,
      startDate: action.startDate,
      endDate: action.endDate,
    });
    common.log(`res1: ${res1}`);
    /*
    There are 3 services which do the same thing
    1. sproc200206 calls the MSSQL Kors production database that is updated by Mach2. 
    2. mysql200206 calls the MySQL Kors database using an MySQL connector. 
    3. maria200206 calls the MySQL Kors database using an MariaDb connector. 
    The MySQL Kors database lives in a docker container and is updated from records 
    exported from the MSSQL Kors database.  
    */
    g_dispatch(actions.Set200206Sproc(srv200206));
    g_dispatch(actions.Set200206Table(res1.table)); // set by service
    g_dispatch(actions.Set200206Total(res1.record_count)); // set by service
    g_dispatch(actions.Set200206Limit(action.limit)); // set by UI
    g_dispatch(actions.Set200206Skip(0));
    // Returns a portion of the table records defined by limit and skip variables
    var res2 = yield g_services.service(srv200206).find({
      query: {
        $table: res1.table,
        $limit: action.limit,
        $skip: 0,
      },
    });
    //    common.log(res);
    g_dispatch(actions.Set200206Data(res2));
    // creates a table for bar charts.
    var res3 = yield g_services.service(srv200221).create({
      //        tableName: tableName,
      startDate: action.startDate,
      endDate: action.endDate,
    });
    common.log(`res3: ${res3}`);
    g_dispatch(actions.Set200221Sproc(srv200221));
    g_dispatch(actions.Set200221Table(res3.table));
    g_dispatch(actions.Set200221Total(res3.record_count));
    g_dispatch(actions.Set200221Limit(action.limit));
    g_dispatch(actions.Set200221Skip(0));

    var res4 = yield g_services.service(srv200221).find({
      query: {
        $table: res3.table,
        $limit: action.limit,
        $skip: 0, // start with the first record in the table.
      },
    });
    common.log(res4);
    g_dispatch(actions.Set200221Data(res4)); // set the dataset variable.

    if (action.route) {
      yield put(push(action.route)); // The UI asked us to change routes after we were done.
    }
    if (action.setSubmittingOff) {
      // Enables buttons in the UI forms and dialogs.
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
// Not tested.
// Currently handleView200206 calls the create service.
// Generator function
export function* handleSproc200206Create(action) {
  common.log('in handleSproc200206Create');
  common.log(
    `startDate : ${action.startDate}, endDate: ${action.endDate}, fetch: ${action.fetch}, limit:${action.limit}, route:${action.route}, setSubmittingOff:${action.setSubmittingOff}`,
  );
  const srv200206 = process.env.REACT_APP_FEATHERS_200206_SERVICE;
  try {
    var res = yield g_services.service(srv200206).create({
      //        tableName: tableName,
      startDate: action.startDate,
      endDate: action.endDate,
    });
    common.log(`res: ${res}`);
    g_dispatch(actions.Set200206Sproc(srv200206));
    g_dispatch(actions.Set200206Table(res.table));
    g_dispatch(actions.Set200206Total(res.record_count));
    g_dispatch(actions.Set200206Limit(action.limit));
    g_dispatch(actions.Set200206Skip(0));

    if (action.fetch) {
      g_dispatch(
        actions.Sproc200206Fetch(
          srv200206,
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

export function* handleSproc200206Fetch(action) {
  common.log('in handleSproc200206Fetch');
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
    //    common.log(res);
    g_dispatch(actions.Set200206Data(res));
    g_dispatch(actions.Set200206Skip(action.skip));
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

export function* watchSproc200206Create() {
  yield takeEvery(types.SPROC200206_CREATE, handleSproc200206Create);
}

export function* watchSproc200206Fetch() {
  yield takeEvery(types.SPROC200206_FETCH, handleSproc200206Fetch);
}

export function* watchView200206() {
  yield takeEvery(types.VIEW_200206, handleView200206);
}

export function setSAGA(services, dispatch) {
  g_services = services;
  g_dispatch = dispatch;
}

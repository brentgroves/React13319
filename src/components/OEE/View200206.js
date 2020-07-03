import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Table200206 } from '../../containers/OEE/Table200206';
import { BarChart200221Scrap } from '../../containers/OEE/BarChart200221Scrap';
import { BarChart200221DownTime } from '../../containers/OEE/BarChart200221DownTime';
import * as errorSeverity from '../../constants/ErrorSeverity';
import * as errorType from '../../constants/ErrorType';
import * as common from '@bgroves/common';

export default function View200206(params) {
  const { Push, total, SetAppError } = params;
  useEffect(() => {
    if (total === 0) {
      SetAppError(
        'No records for that date range.',
        errorType.DATE,
        errorSeverity.LOW,
      );
      common.log('View200206=>No records, before push()');
      Push('/');
    }
  });
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={12} lg={6}>
        <BarChart200221Scrap />
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={12} lg={6}>
        <BarChart200221DownTime />
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Table200206 />
      </Grid>
    </Grid>
  );
}

/*
export default function Dashboard({ isAuthenticated, isAdmin, Push }) {
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    if (!isAuthenticated) {
      Push("/login");
    }
  });
*/

import React, { useEffect } from 'react';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Table13319 } from '../../containers/CNC/Table13319';
// import { BarChart200221Scrap } from '../../containers/OEE/BarChart200221Scrap';
// import { BarChart200221DownTime } from '../../containers/OEE/BarChart200221DownTime';
// import * as errorSeverity from '../../constants/ErrorSeverity';
// import * as errorType from '../../constants/ErrorType';
// import * as common from '@bgroves/common';

export default function View13319(params) {
//  const { Push, total, SetAppError } = params;
  useEffect(() => {
    // if (total === 0) {
    //   SetAppError(
    //     'No records for that date range.',
    //     errorType.DATE,
    //     errorSeverity.LOW,
    //   );
    //   common.log('View200206=>No records, before push()');
    //   Push('/');
    // }
  });
  return (
    <Box display="flex">
       <Table13319 />

    </Box>
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

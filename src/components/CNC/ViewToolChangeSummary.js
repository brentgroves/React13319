import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TableToolChangeSummary } from '../../containers/CNC/TableToolChangeSummary';

// import * as common from '@bgroves/common';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

export default function ViewToolChangeSummary(params) {
  //  const { Push, total, SetAppError } = params;
  const {startDate,endDate} = params;
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
  const classes = useStyles();
  return (
    <div>
    <Box display="flex" flexDirection="column">
      <Box p={1} bgcolor="grey.300">
        <div className={classes.root}>
          <Typography variant="h6" align="center" gutterBottom>
          Tool Change Summary
          </Typography>
          <Typography variant="body1" gutterBottom>
            This report shows the average tool life for each tool assembly by part operation
            for the selected time frame.  The tool life that equal 999999 have not been set 
            in the OTLM.SSB subroutine.  I
          </Typography>
        </div>
      </Box>
      <Box>
        <TableToolChangeSummary />
      </Box>
    </Box>
    </div>
  );
}


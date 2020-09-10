import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TableUpcomingToolChanges } from '../../containers/CNC/TableUpcomingToolChanges';

// import * as common from '@bgroves/common';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

export default function ViewUpcomingToolChanges(params) {
  //  const { Push, total, SetAppError } = params;
  const {Building_Code} = params;
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
   {Building_Code} Upcoming Tool Changes.
          </Typography>
          <Typography variant="body1" gutterBottom>
            This report lists the upcoming tool changes for a building and is in
            ascending order.  The estimate of when a tool change will be needed is 
            based upon the current tool counter value, the last recorded tool life
            in the OTLM.SSB subroutine, and the fastest cycle time as recorded by 
            App13319.  It can be improved by changing the code to lower the priority
            of CNC that are not currently running.
          </Typography>
        </div>
      </Box>
      <Box>
        <TableUpcomingToolChanges />
      </Box>
    </Box>
    </div>
  );
}


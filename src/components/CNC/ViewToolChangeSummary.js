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
          This report shows the weekly tool life average,Week TL, for each tool assembly
          as recorded by the Plex Tool Tracker.  The standard tool life,STD TL, is taken from the 
          CNC’s OTLM.SSB subroutine.  The standard cost per unit, STD CPU, is based upon the 
          standard tool life and weekly CPU, Week CPU, is based upon the weekly tool life.
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


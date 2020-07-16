import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// import * as common from '@bgroves/common';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

export default function ViewPartProdRate(params) {
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
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column">
      <Box p={1} bgcolor="grey.300">
        <div className={classes.root}>
          <Typography variant="h6" align="center" gutterBottom>
            Part Production Rates
          </Typography>
          <Typography variant="body1" gutterBottom>
            These are the production rates for each part.
          </Typography>
        </div>
      </Box>
      <Box>
        <h1>TableProductionRate</h1>
      </Box>
    </Box>
  );
}


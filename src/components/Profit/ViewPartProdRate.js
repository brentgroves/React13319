import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TablePartProdRate } from '../../containers/Profit/TablePartProdRate';

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
            These are the production rates based on 480 production hour periods which start on 12 am of 04/01/2019 
            and end on 11:59 pm of the last day of the month that is 2 months previous to todays date. 
            The date range of each period is unique to every part. 
            The total count of parts produced for each period is determined by looking at shipped containers only.
            The shipped container's quantity is added to the period in which it was first moved to a finished location.
          </Typography>
        </div>
      </Box>
      <Box>
        <TablePartProdRate />
      </Box>
    </Box>
  );
}


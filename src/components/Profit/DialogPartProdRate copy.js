import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import 'fontsource-roboto';
import { Formik } from 'formik';
import * as yup from 'yup'; // for everything
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import * as common from '@bgroves/common';

import * as errorSeverity from '../../constants/ErrorSeverity';
import * as errorType from '../../constants/ErrorType';

let validationSchema = yup.object().shape({
  startPeriod: yup
    .number()
    .typeError('Start must be a number')
    .test(
      'compare start and end period',
      'Start should be equal to or come before the End period.)',
      function(start) {
        // beware, don't use arrow function here otherwise you would not the reference to `this` object
        let { endPeriod } = this.parent; // retrieve the value of the sibling form field with id `1st_number`
        if (start > endPeriod) return false;
        else return true;
      },
    )
    .min(0, 'Start must be greater than or equal to 0')
    .max(10, 'Start must be less than or equal to 4')
    //    .lessThan(yup.ref('endPeriod')+1, "End should be >= Start")

    .required('required'),
  endPeriod: yup
    .number()
    .typeError('End must be a number')
    .test(
      'compare start and end period',
      'End should be equal to or come after the start period.',
      function(end) {
        const { startPeriod } = this.parent;
        if (end >= startPeriod) {
          return true;
        }
        return false;
      },
    )
    .min(0, 'End must be greater than or equal to 0')
    .max(10, 'End must be less than or equal to 4')
    .required('required'),
});


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    //  display: 'flex',
    //   flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    padding: theme.spacing(0),
  },
  s1: {
    padding: theme.spacing(2),
  },
}));

export default function DialogPartProdRate(params) {
  const {
    PartProdRateFetch,
    Push,
    SetAppError,
    Submitting,
    submitting,
  } = params;

  const classes = useStyles();

  const handleClose = () => {
    Push('/profit');
  };
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <Formik
        initialValues={{ startPeriod: 0, endPeriod: 4 }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          Submitting(true); // buttons look at this to determine if they should be enabled?
          let start = values.startPeriod;
          common.log(start);
          let end = values.endDate;
          common.log(end);
          //Compare the two dates and return 1 if the first date is after the second,
          // -1 if the first date is before the second or 0 if dates are equal.
          if (start > end) {
            SetAppError(
              'Start period should be before or equal to the end period.',
              errorType.VALIDATION,
              errorSeverity.LOW,
            );
            Submitting(false);
          } else {
            Push('/profit/transition');
            PartProdRateFetch(
              start,
              end,
              1000,
              0,
              '/profit/ViewProductionRate',
              true,
            ); // will set submitting to false after done.
          }
        }}
      >
        {props => {
          // const { handleSubmit } = props;
          const {
            values: { startPeriod, endPeriod },
            errors,
            touched,
            handleSubmit,
            handleChange,
            isValid,
            setFieldTouched,
          } = props;

          const change = (name, e) => {
            e.persist();
            handleChange(e);
            setFieldTouched(name, true, false);
          };
          return (
            <div>
              <Box
                display="flex"
                justifyContent="center"
                m={1}
                p={1}
                bgcolor="background.paper"
              >
                <form className={classes.root} onSubmit={handleSubmit}>
                  <Typography variant="h5" gutterBottom>
                    Select Part Time Period
                  </Typography>

                  <TextField
                    id="startPeriod"
                    name="startPeriod"
                    helperText={touched.startPeriod ? errors.startPeriod : ''}
                    error={touched.startPeriod && Boolean(errors.startPeriod)}
                    label="Start"
                    value={startPeriod}
                    onChange={change.bind(null, 'startPeriod')}
                  />
                  <TextField
                    id="endPeriod"
                    name="endPeriod"
                    helperText={touched.endPeriod ? errors.endPeriod : ''}
                    error={touched.endPeriod && Boolean(errors.endPeriod)}
                    label="End"
                    value={endPeriod}
                    onChange={change.bind(null, 'endPeriod')}
                  />
                </form>
              </Box>
            </div>
          );
        }}
      </Formik>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" type="submit" disabled={submitting}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

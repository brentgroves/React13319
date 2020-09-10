import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
import { Formik } from 'formik';
import * as yup from 'yup'; // for everything
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
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
    // .max(10, 'Start must be less than or equal to 4')
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
    //.max(10, 'End must be less than or equal to 4')
    .required('required'),
});

/*
    })    // .test({
    //   name: 'max',
    //   exclusive: true,
    //   params: { max },
    //   message: '${path} must be less than ${max} characters',
    //   test: value => value == null || value.length <= max,
    // })    
//    .when('endPeriod')
    .when('endPeriod', (endPeriod, schema) => {
      return schema.test({
        test: startPeriod => { 
          if (!endPeriod){
            return true;
          }else{
            return endPeriod >= startPeriod;
          }
        },
//        test: endPeriod => !!startPeriod && endPeriod >= startPeriod,
        message: "Start should be <= End Period"
      })

  endPeriod: yup
    .number()
    .when('startPeriod', (startPeriod, schema) => {
      return schema.test({
        test: endPeriod => !!startPeriod && endPeriod > startPeriod,
        message: "Max should be > min"
      })
    })
// .when(
//   ["startPeriod", "endPeriod"],
//   (startPeriod, endPeriod, schema) => {
//       return !!startPeriod && startPeriod !== endPeriod
//           ? schema.moreThan(
//                   endPeriod,
//                   "Max should be > min"
//             )
//           : schema;
//   }
// )
test({
  name: 'max',
  exclusive: true,
  params: { max },
  message: '${path} must be less than ${max} characters',
  test: value => value == null || value.length <= max,
})
    .when('startPeriod', (startPeriod, schema) => {
      return schema.test({
        test: endPeriod => !!startPeriod && endPeriod > startPeriod,
        message: "Max should be > min"
      })
    })
*/
/*
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));
*/
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
/*
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    },
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4)
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
*/
export default function DialogPartProdRate(params) {
  const {
    PartProdRateFetch,
    SetPartProdRateStartPeriod,
    SetPartProdRateEndPeriod,
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
        initialValues={{ startPeriod: 0, endPeriod: 10 }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          Submitting(true); // buttons look at this to determine if they should be enabled?
          let start = values.startPeriod;
          common.log(start);
          let end = values.endPeriod;
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
            SetPartProdRateStartPeriod(start);
            SetPartProdRateEndPeriod(end);
            Push('/profit/transition');
            PartProdRateFetch(
              start,
              end,
              1000,
              0,
              '/profit/ViewPartProdRate',
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
                className={classes.root}
                m={1}
                p={1}
                bgcolor="background.paper"
              >
                <form onSubmit={handleSubmit}>
                  <Typography variant="h4" gutterBottom>
                    Time Period Range
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Part time periods are unique to each part and start at 0 and increment every
                    480 production hours.
                  </Typography>

                  <Box p={1} className={classes.root}>
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
                  </Box>
                  <Box p={1} className={classes.buttons}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={submitting}
                    >
                      Submit
                    </Button>
                  </Box>
                </form>
              </Box>
            </div>
          );
        }}
      </Formik>
    </Dialog>
  );
}

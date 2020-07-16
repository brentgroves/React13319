import { compareAsc, format } from "date-fns";
import { Formik, Field } from "formik";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import React from "react";
import * as common from '@bgroves/common';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
// https://dev.to/finallynero/react-form-using-formik-material-ui-and-yup-2e8h
import * as errorSeverity from "../../constants/ErrorSeverity";
import * as errorType from "../../constants/ErrorType";

const Form = (props) => {
  return (
   <form onSubmit={() => {}}>
     <TextField
       id="name"
       name="name"
       label="Name"
       fullWidth

     />
     <TextField
       id="email"
       name="email"
       label="Email"
       fullWidth
     />
     <Button
       type="submit"
       fullWidth
       variant="raised"
       color="primary"
     >
       Submit
     </Button>
   </form>
 );
};

/*

const DatePickerField = ({ field, form, myLabel,...other }) => {
  const currentError = form.errors[field.name];
  common.log(`field: ${field.name},${myLabel}`);
 
  return (
    <KeyboardDatePicker
      required
      disableToolbar
      variant="inline"
      margin="normal"
      id={field.name}
      name={field.name}
      label={myLabel}
      value={field.value}
      format="MM/dd/yyyy"
      helperText={currentError}
      error={Boolean(currentError)}
      onError={error => {
        // handle as a side effect
        if (error !== currentError) {
          form.setFieldError(field.name, error);
        }
      }}
      autoComplete=""
      // if you are using custom validation schema you probably want to pass `true` as third argument
      onChange={date => form.setFieldValue(field.name, date, true)}
      KeyboardButtonProps={{
        "aria-label": "change date"
      }}
      {...other}
    />
  );
};
*/
export default function DialogPartProdRate(params) {
  const {
    PartProdRateFetch,
    Push,
    SetAppError,
    Submitting,
    submitting
  } = params;

  const handleClose = () => {
    Push("/");
  };
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Part Production Rate</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Select the start and end period. Period 0 start on ??? and each period equates to 480 production hours worked.
        </DialogContentText>

        <Formik
          initialValues={{ startPeriod: 0, endPeriod: 4 }}
          onSubmit={(values, { setSubmitting }) => {
            Submitting(true);  // buttons look at this to determine if they should be enabled?
            let start = values.startPeriod;
            common.log(start);
            let end = values.endDate;
            common.log(end);
            //Compare the two dates and return 1 if the first date is after the second,
            // -1 if the first date is before the second or 0 if dates are equal.
            if (start > end) {
              SetAppError(
                "Start period should be before or equal to the end period.",
                errorType.VALIDATION,
                errorSeverity.LOW
              );
              Submitting(false);
            } else {
              Push('/profit/transition');
              PartProdRateFetch(start, end, 1000, 0, "/profit/ViewProductionRate", true);  // will set submitting to false after done.
            }
          }}
        >
          {props => {
            const { handleSubmit } = props;

            return (
              <div>
                           <Formik
             render={props => <Form {...props} />}
           />
              </div>
            );
          }}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

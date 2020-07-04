import { compareAsc, format } from "date-fns";
import { Formik, Field } from "formik";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import React from "react";
import * as common from '@bgroves/common';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import * as errorSeverity from "../../constants/ErrorSeverity";
import * as errorType from "../../constants/ErrorType";

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

export default function Dialog200206(params) {
  const {
    firstDayOfWeek,
    lastDayOfWeek,
    OpenDialog200206,
    View200206,
    Push,
    SetAppError,
    Submitting,
    submitting
  } = params;

  const handleClose = () => {
    Push("/");
    OpenDialog200206(false);
  };
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">OEE by Part</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Select the start and end date. The start date's time is 00:00:00 and
          end date's time is 11:59:59.
        </DialogContentText>

        <Formik
          initialValues={{ startDate: firstDayOfWeek, endDate: lastDayOfWeek }}
          onSubmit={(values, { setSubmitting }) => {
            Submitting(true);  // buttons look at this to determine if they should be enabled?
            let sd = new Date(values.startDate);
            let start = format(sd, "yyyy-MM-dd'T00:00:00'");
            common.log(start);
            let ed = new Date(values.endDate);
            let end = format(ed, "yyyy-MM-dd'T23:59:59'");
            common.log(end);
            //Compare the two dates and return 1 if the first date is after the second,
            // -1 if the first date is before the second or 0 if dates are equal.
            if (-1 === compareAsc(ed, sd)) {
              SetAppError(
                "Start date should be before end date.",
                errorType.DATE,
                errorSeverity.LOW
              );
              Submitting(false);
            } else {
              Push('/oee/transition');
              View200206(start, end, 1000, "/oee/view200206", true);  // will set submitting to false after done.
           //   OpenDialog200206(false);
            }
          }}
        >
          {props => {
            const { handleSubmit } = props;

            return (
              <div>
                <form onSubmit={handleSubmit}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <Field name="startDate" placeholder="Start Date" myLabel="Start Date" component={DatePickerField} />
                      <Field name="endDate" placeholder="End Date" myLabel="End Date" component={DatePickerField} />
                    </Grid>
                  </MuiPickersUtilsProvider>
                  <DialogActions>
                    <Button
                      disabled={submitting}
                      type="button"
                      className="outline"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={submitting}>
                      Submit
                    </Button>
                  </DialogActions>
                </form>
              </div>
            );
          }}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

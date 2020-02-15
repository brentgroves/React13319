import React from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { format,compareAsc  } from "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
//https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
import { Formik, Form, Field, ErrorMessage, DisplayFormikState } from "formik";
import * as Yup from "yup";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
const DatePickerField = ({ field, form, ...other }) => {
  const currentError = form.errors[field.name];

  return (
    <KeyboardDatePicker
    required
      disableToolbar
      variant="inline"
      margin="normal"
      id={field.name}
      name={field.name}
      label="Start Date"
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
      onChange={(date) =>
        form.setFieldValue(field.name, date, true)

      }
      KeyboardButtonProps={{
        "aria-label": "change date"
      }}
      {...other}
    />

  );
};

export default function Sproc200206Dialog(params) {
  const {
    firstDayOfWeek,
    lastDayOfWeek,
    Push,
    OpenSproc200206Dialog,
    Sproc200206Create
  } = params;
  const classes = useStyles();
  // The first commit of Material-UI
  //const [startDate, setStartDate] = React.useState(firstDayOfWeek);
  //const [endDate, setEndDate] = React.useState(lastDayOfWeek);
  /*
const handleStartDateChange = date => {
  setStartDate(date);
};
const handleEndDateChange = date => {
  setEndDate(date);
};
*/

  const [open, setOpen] = React.useState(true);

  const [dateError, setDateError] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    OpenSproc200206Dialog(false);
  };
  /*
  const handleSubmit = () => {
  //  console.log(startDate);
  let sd = new Date(startDate);
  let start = format(sd, "yyyy-MM-dd'T00:00:00'")
  console.log(start);
  let ed = new Date(endDate);
  let end = format(ed, "yyyy-MM-dd'T23:59:59'")
  console.log(end);

//    console.log(selectedDate);
//    console.log(format(selectedDate, "yyyy-MM-dd'T00:00:00'"));
    //Sproc200206Create("2020-02-01T00:00:00","2020-02-07T23:59:00");

//    Sproc200206Create(selectedDate);
  };
*/
  return (
    <Dialog
      open={open}
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
            //console.log(values.email);
            /*
      let sd = new Date(startDate);
      let start = format(sd, "yyyy-MM-dd'T00:00:00'")
      console.log(start);
      let ed = new Date(endDate);
      let end = format(ed, "yyyy-MM-dd'T23:59:59'")
      console.log(end);

      AuthenticateSaga({
        email: values.email,
        password: values.password
      });
*/
            setSubmitting(true);
            let sd = new Date(values.startDate);
            let start = format(sd, "yyyy-MM-dd'T00:00:00'")
            console.log(start);
            let ed = new Date(values.endDate);
            let end = format(ed, "yyyy-MM-dd'T23:59:59'")
            console.log(end);
            //Compare the two dates and return 1 if the first date is after the second,
            // -1 if the first date is before the second or 0 if dates are equal.
            if (-1==compareAsc(ed, sd)){
              setDateError(true);

            }
            /*
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
            */
            Sproc200206Create(start,end);
            OpenSproc200206Dialog(false);

          }}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset
            } = props;

            return (
              <div>
              <form onSubmit={handleSubmit}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                  <Field name="startDate" component={DatePickerField} />
                  <Field name="endDate" component={DatePickerField} />

                  </Grid>
                </MuiPickersUtilsProvider>
                <DialogActions>
                <Button
                disabled={isSubmitting}
                  type="button"
                  className="outline"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                {/*
                  <Button
                    type="button"
                    className="outline"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                  >
                    Reset
                  </Button>
                  */}
                  <Button type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                  {/* <DisplayFormikState {...props} /> */}
                </DialogActions>
              </form>
              <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                open={dateError}
                autoHideDuration={6000}
                onClose={() => setDateError(false)}
                message={"Start date should be before end date."}
                action={
                  <React.Fragment>
                    <Button color="secondary" size="small" onClick={() => setDateError(false)}>
                      Fail
                    </Button>

                    <IconButton size="small" aria-label="close" color="inherit" onClick={() => setDateError(false)}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
              />
              </div>
            );
          }}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

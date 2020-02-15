import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { FormikExample } from "../containers/FormikExample";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { DisplayFormikState } from './formikHelper';

//const contactFormEndpoint = process.env.REACT_APP_CONTACT_ENDPOINT;

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

function Sproc200206Dialog(props) {
  const {
    firstDayOfWeek,
    lastDayOfWeek,
    Push,
    OpenSproc200206Dialog,
    Sproc200206Create
  } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

  function handleClose() {
    OpenSproc200206Dialog(false);
  }

  function handleClickOpen() {
    setSubmitionCompleted(false);
    setOpen(true);
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {!isSubmitionCompleted && (
          <React.Fragment>
            <DialogTitle id="form-dialog-title">Contact</DialogTitle>
            <DialogContent>
              <DialogContentText>Send us a comment!</DialogContentText>
              <Formik
                initialValues={{ startDate: firstDayOfWeek, endDate: lastDayOfWeek }}
                onSubmit={(values, { setSubmitting }) => {

                  setSubmitting(true);
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitionCompleted(true);
                    
                  }, 400);
                }}
                validationSchema={Yup.object().shape({
                  startDate: Yup.date().required("Required"),
                //  endDate: Yup.date().when('startDate', (st, schema) => { schema.min(st); })
                  endDate: Yup.date().min(Yup.ref("startDate"),"End date should be later than start date.")

                })}
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
                    <form onSubmit={handleSubmit}>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">

                          <Field name="startDate" component={DatePickerField} />
                          <Field name="endDate" component={DatePickerField} />
                    {/*      <Field name="endDate" component={DatePickerField} /> */}
                            <div>{JSON.stringify(errors.endDate, null, 2)}</div>
                            <div>{JSON.stringify(values.endDate, null, 2)}</div>
                            <div>{JSON.stringify(values, null, 2)}</div>
                        </Grid>
                      </MuiPickersUtilsProvider>
                      <DialogActions>
                        <Button
                          type="button"
                          className="outline"
                          onClick={handleReset}
                          disabled={!dirty || isSubmitting}
                        >
                          Reset
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                          Submit
                        </Button>
                      </DialogActions>
                    </form>
                  );
                }}
              </Formik>
            </DialogContent>
          </React.Fragment>
        )}
        {isSubmitionCompleted && (
          <React.Fragment>
            <DialogTitle id="form-dialog-title">Thanks!</DialogTitle>
            <DialogContent>
              <DialogContentText>Thanks</DialogContentText>
              <DialogActions>
                <Button type="button" className="outline" onClick={handleClose}>
                  Back to app
                </Button>
                {/* <DisplayFormikState {...props} /> */}
              </DialogActions>
            </DialogContent>
          </React.Fragment>
        )}
      </Dialog>
    </React.Fragment>
  );
}

export default Sproc200206Dialog;

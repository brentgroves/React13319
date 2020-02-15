import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from "@material-ui/core/styles";
import { FormikExample } from '../containers/FormikExample';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
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
        {!isSubmitionCompleted &&
          <React.Fragment>
            <DialogTitle id="form-dialog-title">Contact</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Send us a comment!
              </DialogContentText>
              <Formik
                initialValues={{ email: '', name: '', comment: '' }}
                onSubmit={(values, { setSubmitting }) => {
                   setSubmitting(true);
                   setTimeout(() => {
                     alert(JSON.stringify(values, null, 2));
                     setSubmitionCompleted(true);
                   }, 400);
                }}

                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email()
                    .required('Required'),
                  name: Yup.string()
                    .required('Required'),
                  comment: Yup.string()
                    .required('Required'),
                })}
              >
                {(props) => {
                  const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

<FormikExample />
</MuiPickersUtilsProvider>

                      <TextField
                        label="name"
                        name="name"
                        className={classes.textField}
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.name && touched.name) && errors.name}
                        margin="normal"
                      />

                      <TextField
                        error={errors.email && touched.email}
                        label="email"
                        name="email"
                        className={classes.textField}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.email && touched.email) && errors.email}
                        margin="normal"
                      />

                      <TextField
                        label="comment"
                        name="comment"
                        className={classes.textField}
                        value={values.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.comment && touched.comment) && errors.comment}
                        margin="normal"
                      />
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
                        {/* <DisplayFormikState {...props} /> */}
                      </DialogActions>
                    </form>
                  );
                }}
              </Formik>
            </DialogContent>
          </React.Fragment>
        }
        {isSubmitionCompleted &&
          <React.Fragment>
            <DialogTitle id="form-dialog-title">Thanks!</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Thanks
              </DialogContentText>
              <DialogActions>
                <Button
                  type="button"
                  className="outline"
                  onClick={handleClose}
                >
                  Back to app
                  </Button>
                {/* <DisplayFormikState {...props} /> */}
              </DialogActions>
            </DialogContent>
          </React.Fragment>}
      </Dialog>
    </React.Fragment >
  );
}

export default Sproc200206Dialog;

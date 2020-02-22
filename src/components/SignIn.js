//https://hackernoon.com/react-form-validation-using-react-hooks-5859c32280ca
//https://hackernoon.com/react-form-validation-using-react-hooks-5859c32280ca
import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
//https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
//const feathers = require('@feathersjs/feathers');
//import { useForm } from 'react-hook-form'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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

//https://medium.com/hackernoon/learn-react-hooks-by-building-an-auth-based-to-do-app-c2d143928b0b
const SignIn = ({
  AuthenticateSaga,
  ClearAppError,
  Submitting,
  appError,
  isAuthenticated,
  submitting
}) => {
//  const referer = props.location.state.referer || '/';
  const classes = useStyles();
  const [open, setOpen] = useState(false);
//  const [isSubmitionCompleted, setSubmitionCompleted] = useState(isSubmitting);
  const history = useHistory();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    ClearAppError();
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
//  if(true==isAuthenticated){
  //    history.push("/");
//  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values.email);
        Submitting(true);
        AuthenticateSaga(values.email,values.password,"/",true);

        /*
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
      */
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string().required("Required")
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
          <section id="new-message">
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                <form className={classes.form} onSubmit={handleSubmit}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={errors.email && touched.email}
                    label="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.email && touched.email && errors.email}
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={errors.password && touched.password}
                    name="password"
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.password && touched.password && errors.password
                    }
                    type="password"
                    autoComplete="current-password"
                  />
                  {/*
  <FormControlLabel
    control={<Checkbox value="remember" color="primary" />}
    label="Remember me"
  />
*/}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={submitting}
                  >
                    Sign In
                  </Button>
                  {/*
<Button type="submit" disabled={isSubmitting}>
  Submit
</Button>
*/}
                </form>
                <Snackbar
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  open={appError.error}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  message={appError.message}
                  action={
                    <React.Fragment>
                      <Button color="secondary" size="small" onClick={handleClose}>
                        Fail
                      </Button>
                      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </React.Fragment>
                  }
                />
              </div>
            </Container>
          </section>
        );
      }}
    </Formik>
  );
};

//   await srv.authenticate().catch(error => console.log(error));
/*
const SignIn = (props) => {
  let input
  const classes = useStyles();


  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
    <Avatar className={classes.avatar}>
  <LockOutlinedIcon />
</Avatar>
<Typography component="h1" variant="h5">
  Sign in
</Typography>
<form className={classes.form} noValidate>
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
    autoFocus
  />
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
  />
  <FormControlLabel
    control={<Checkbox value="remember" color="primary" />}
    label="Remember me"
  />
  <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    className={classes.submit}
//    onClick={() => alert('hello')}
    onClick={() => props.dispatch('hello')}
//    onClick={() => {
  //    props.dispatch('user1');

//    dispatch(addUserName(res.user.name))
      //alert('hello');
//      console.log(app);
*/
/*
      app.authenticate({
      "strategy": "local",
      "email": "sgroves@buschegroup.com",
      "password": "JesusLives1!",
      "userName": "Steven",
      "isAdmin": false,
      "roles": [ "Quality" ]
      }).then((res) => {
        console.log(res);
      }).catch(e => {
        // Show login page (potentially with `e.message`)
        console.error('Authentication error', e);
      });
*/
//    }}

/*
  >
    Sign In
  </Button>
  </form>
</div>
</Container>
  )
}

*/

export default SignIn;

// https://hackernoon.com/react-form-validation-using-react-hooks-5859c32280ca
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { loginRequest } from "../config/authConfig";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";

import * as Yup from 'yup';

import * as common from '@bgroves/common';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// https://medium.com/hackernoon/learn-react-hooks-by-building-an-auth-based-to-do-app-c2d143928b0b
const SignIn = ({
  AuthenticateSaga,
  ClearAppError,
  Submitting,
  appError,
  isAuthenticated,
  submitting,
}) => {
  //  const referer = props.location.state.referer || '/';
  const classes = useStyles();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        common.log(`process.env.NODE_ENV=${process.env.NODE_ENV}`);
        common.log(values.email);
        Submitting(true);
        AuthenticateSaga(values.email, values.password, '/', true);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required('Required'),
        password: Yup.string().required('Required'),
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;

        return (
          <React.Fragment>
          <CssBaseline />
          <Container className={classes.paper} component="main" maxWidth="xs">
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
                </form>
            </Container>
            </React.Fragment>
        );
      }}
    </Formik>
  );
};

export default SignIn;

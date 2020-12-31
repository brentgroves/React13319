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
import { useIsAuthenticated, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";

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
  instructions: {
    padding: 14
  }
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
  const { instance } = useMsal();
  const isAuthenticatedAAD = useIsAuthenticated();
  const handleSignOut = event => {
    alert('Sign Out');
    instance.logout();
    // instance.loginRedirect(loginRequest);
  };
  const handleSignIn = event => {
    alert('Sign In');
    instance.loginRedirect(loginRequest);
    // instance.loginRedirect(loginRequest);
  };


  return (
          <React.Fragment>
          <p>Anyone can see this paragraph.</p>
            {isAuthenticatedAAD && (
                <p>At least one account is signed in!</p>
            )}
            {!isAuthenticatedAAD && (
                <p>No users are signed in!</p>
            )}

            <Button onClick={handleSignOut}>
              Sign Out
            </Button>

            <Button onClick={handleSignIn}>
              Sign In
            </Button>

            </React.Fragment>
        );
  };

export default SignIn;
/*

                  <AuthenticatedTemplate>

                  <Button onClick={handleSignOut}>
                    Sign Out
                  </Button>
                  </AuthenticatedTemplate>
                  <UnauthenticatedTemplate>

                  <Button onClick={handleSignIn}>
                    Sign In
                  </Button>
                  </UnauthenticatedTemplate>
*/

import React, { useEffect } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import { OEE } from '../containers/OEE/App';
import { CNC } from '../containers/CNC/App';
import { Profit } from '../containers/Profit/App';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import { LaunchMenu } from '../containers/LaunchMenu';
import { SignIn } from '../containers/SignIn';
import LinearIndeterminate from './LinearIndeterminate';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }

}));

export default function App({
  appSet,
  currentApp,
  ClearAppError,
  appError,
  isAuthenticated,
  Push,
}) {

  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    if (!isAuthenticated) {
      Push('/login');
    }
  });
  const handleClose = (event, reason) => {
    ClearAppError();
    if (reason === 'clickaway') {
      return;
    }
    //    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
    <CssBaseline />
        <Switch>
          <Route path="/oee">
            <OEE />
          </Route>
          <Route path="/cnc">
            <CNC />
          </Route>
          <Route path="/profit">
            <Profit />
          </Route>
          <Route exact path="/transition" component={LinearIndeterminate} />
          <Route exact path="/" component={LaunchMenu} />
          <Route path="/login" component={SignIn} />
        </Switch>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
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
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}



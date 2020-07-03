import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Box from '@material-ui/core/Box';

import * as AppSet from '../constants/AppSet';
import { OEE } from '../containers/OEE/App';
import { CNC } from '../containers/CNC/App';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import * as AppId from '../constants/AppId';
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

//export default Dashboard

/*
<Box display="flex" p={1} bgcolor="background.paper">

      {currentApp === 0 && !isAuthenticated && <SignIn />}
      {currentApp === 0 && isAuthenticated && <LaunchMenu />}
      {currentApp === AppId.OEE && isAuthenticated && <OEEApp />}
      {currentApp === AppId.CNC && isAuthenticated && <CNCApp />}


const App = (props) => {
  const {firstName} = props
  return (
      <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
      </Switch>

  )

}
export default App
*/

import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

import clsx from 'clsx';
import { AppMenu } from '../../containers/AppMenu';
import { SideMenu } from '../../containers/CNC/SideMenu';
import { Landing } from '../../containers/CNC/Landing';
import { View13319 } from '../../containers/CNC/View13319';
import { ToolbarAvatar } from '../../containers/ToolbarAvatar';
import { DialogCompareContainer } from '../../containers/CNC/DialogCompareContainer';
import { DialogUpcomingToolChanges } from '../../containers/CNC/DialogUpcomingToolChanges';
import { ViewCompareContainer } from '../../containers/CNC/ViewCompareContainer';
import { ViewUpcomingToolChanges } from '../../containers/CNC/ViewUpcomingToolChanges';
import { DialogToolChangeSummary } from '../../containers/CNC/DialogToolChangeSummary';
import { ViewToolChangeSummary } from '../../containers/CNC/ViewToolChangeSummary';
import LinearIndeterminate from '../LinearIndeterminate';

const drawerWidth = 200;
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
//   small: {
//     width: theme.spacing(3),
//     height: theme.spacing(3),
//   },
//   large: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  avatar:  {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  orange:  {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

export default function App({
  initials,
  isAuthenticated,
  isAdmin,
  pathname,
  Push,
  Logout,
  ClearAppError,
  AuthenticateSaga,
  appError,
  openDialog200206,
  openDialogToolChangeSummary,
  Submitting,
  submitting,
}) {
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    // if (!isAuthenticated) {
    //   Push('login');
    // }
  });
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCloseSnackBar1 = (event, reason) => {
    console.log(`In handleCloseSnackBar1`);
    ClearAppError();
    if (reason === 'clickaway') {
      return;
    }
    //    setOpen(false);
  };
  const handleCloseSnackBar2 = (event, reason) => {
    console.log(`In handleCloseSnackBar2`);
    ClearAppError();
    if (reason === 'clickaway') {
      return;
    }
    //    setOpen(false);
  };
  const handleCloseSnackBar3 = (event, reason) => {
    console.log(`In handleCloseSnackBar3`);
    ClearAppError();
    if (reason === 'clickaway') {
      return;
    }
    //    setOpen(false);
  };
  const handleTest = (event, reason) => {
    console.log(`In handleTest`);
    AuthenticateSaga('user@buschegroup.com', 'password', '/tracker', false);
  };
//         AuthenticateSaga(values.email, values.password, '/', true);

  let match = useRouteMatch();
  return (
    <React.Fragment>
      <CssBaseline />
        <React.Fragment>
          <AppBar
            position="absolute"
            className={clsx(classes.appBar, open && classes.appBarShift)}
          >
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(
                  classes.menuButton,
                  open && classes.menuButtonHidden,
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                Tooling Issues
              </Typography>
              {/* 
                <IconButton color="inherit">
                  <Badge badgeContent={0} color="secondary">
                    <AppsIcon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge onClick={handleLogout} color="primary">
                    <ExitToAppIcon />
                  </Badge>
                </IconButton>                
                */}
              <AppMenu />
              <ToolbarAvatar  />
              </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(
                classes.drawerPaper,
                !open && classes.drawerPaperClose,
              ),
            }}
            open={open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>

            </div>
            <Divider />
            <SideMenu />
          </Drawer>
        </React.Fragment>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route path={`${match.path}/transition`}>
              <LinearIndeterminate />
            </Route>
            <Route path={match.path}>
            <h1>Tracker</h1>
            <Button color="secondary" size="small" onClick={handleTest}>
              Test
            </Button>
            </Route>
          </Switch>
        </Container>
      </main>
    </React.Fragment>
  );
}

//export default Dashboard

/*

              <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={appError.error}
        autoHideDuration={6000}
   //     onClose={handleCloseSnackBar1}
        message={appError.message}
        action={
          <Alert onClose={handleCloseSnackBar1} severity="success">
          This is a success message!
        </Alert>
          // <React.Fragment>
          //   <Button color="secondary" size="small" onClick={handleCloseSnackBar2}>
          //     Fail
          //   </Button>
          //   <IconButton
          //     size="small"
          //     aria-label="close"
          //     color="inherit"
          //     onClick={handleCloseSnackBar3}
          //   >
          //     <CloseIcon fontSize="small" />
          //   </IconButton>
          // </React.Fragment>
        }
        />


          <Route exact path="/transition" component={LinearIndeterminate} />

          <Switch>
            
            <Route exact path="/oee/view200206" component={View200206} />
            <Route path="/oee" component={Landing} />
            <Route path="/oee/dialog200206" component={Dialog200206} />
          </Switch>

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

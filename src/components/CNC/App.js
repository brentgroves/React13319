import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import clsx from 'clsx';
import { AppMenu } from '../../containers/AppMenu';
import { SideMenu } from '../../containers/CNC/SideMenu';
import { Landing } from '../../containers/CNC/Landing';
import { View13319 } from '../../containers/CNC/View13319';
import { DialogCompareContainer } from '../../containers/CNC/DialogCompareContainer';
import { DialogUpcomingToolChanges } from '../../containers/CNC/DialogUpcomingToolChanges';
import { ViewCompareContainer } from '../../containers/CNC/ViewCompareContainer';
import { ViewUpcomingToolChanges } from '../../containers/CNC/ViewUpcomingToolChanges';
import { DialogToolChangeSummary } from '../../containers/CNC/DialogToolChangeSummary';
import { ViewToolChangeSummary } from '../../containers/CNC/ViewToolChangeSummary';
import LinearIndeterminate from '../LinearIndeterminate';

const drawerWidth = 200;

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
}));

export default function App({
  isAuthenticated,
  isAdmin,
  pathname,
  Push,
  Logout,
  ClearAppError,
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
  let match = useRouteMatch();
  return (
    <React.Fragment>
      <CssBaseline />
      {isAuthenticated && pathname !== '/login' && pathname !== '/' && (
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
                CNC Visualizations
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
      )}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route path={`${match.path}/transition`}>
              <LinearIndeterminate />
            </Route>
            <Route path={`${match.path}/dialogCompareContainer`}>
              <DialogCompareContainer />
            </Route>
            <Route path={`${match.path}/dialogUpcomingToolChanges`}>
              <DialogUpcomingToolChanges />
            </Route>
            <Route path={`${match.path}/dialogToolChangeSummary`}>
              <DialogToolChangeSummary />
            </Route>
            <Route path={`${match.path}/ViewToolChangeSummary`}>
              <ViewToolChangeSummary />
            </Route>
            <Route path={`${match.path}/ViewUpcomingToolChanges`}>
              <ViewUpcomingToolChanges />
            </Route>
            <Route path={`${match.path}/view13319`}>
              <View13319 />
            </Route>
            <Route path={`${match.path}/viewCompareContainer`}>
              <ViewCompareContainer />
            </Route>
            <Route path={match.path}>
              <Landing />
            </Route>
          </Switch>
        </Container>
      </main>
    </React.Fragment>
  );
}

//export default Dashboard

/*
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

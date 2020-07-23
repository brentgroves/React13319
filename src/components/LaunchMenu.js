import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BuildIcon from '@material-ui/icons/Build';
import SpeedIcon from '@material-ui/icons/Speed';
import DraftsIcon from '@material-ui/icons/Drafts';
import * as AppId from '../constants/AppId';
import * as AppSet from '../constants/AppSet';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from "@material-ui/core/Paper";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4)
  },  
  paper: {
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),    
  //  display: 'flex',
 //   flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    padding: theme.spacing(0),
  },
  s1: {
    padding: theme.spacing(2),
  },

}));

export default function LaunchMenu(params) {
  const { SetCurrentApp, appSet, Push } = params;

  const classes = useStyles();

  const handleOEE = () => {
    SetCurrentApp(AppId.OEE);
    Push('/oee');
  };
  const handleCNC = () => {
    SetCurrentApp(AppId.CNC);
    Push('/cnc');
  };
  const handleProfit = () => {
    SetCurrentApp(AppId.PROFIT);
    Push('/profit');
  };
  const handleSensor = () => {
    //    Push('/transition');
    //    OpenDialog200206(true);
    SetCurrentApp(AppId.SENSOR);
    Push('/oee');
  };

  return (
    <React.Fragment>
    <CssBaseline />
    <div style={{ width: '100%' }}>
    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        <Box p={1} bgcolor="background.paper" >
        {appSet === AppSet.BPG && (
            <List component="nav" aria-label="main mailbox folders">
              <ListSubheader className={classes.header} >
              <Paper >
            <AppBar position="static" >
              <Toolbar>
                <PlayCircleFilledWhiteIcon style={{ fontSize: 30 }} />
                <Typography variant="h6" className={classes.s1} >
                  BPG Software
                </Typography>
              </Toolbar>
            </AppBar>
          </Paper>
              </ListSubheader>
              <Divider />
              <ListItem button onClick={handleOEE}>
                <ListItemIcon>
                  <SpeedIcon />
                </ListItemIcon>
                <ListItemText bgcolor="primary.main" primary="OEE" />
              </ListItem>
              <ListItem button onClick={handleCNC}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="CNC" />
              </ListItem>
              <ListItem button onClick={handleProfit}>
                <ListItemIcon>
                  <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText primary="Profit" />
              </ListItem>
            </List>
        )}
        {appSet === AppSet.HOME && (
            <List component="nav" aria-label="main mailbox folders">
              <ListSubheader>BPG</ListSubheader>
              <Divider />
              <ListItem button onClick={handleOEE}>
                <ListItemIcon>
                  <SpeedIcon />
                </ListItemIcon>
                <ListItemText bgcolor="primary.main" primary="OEE" />
              </ListItem>
              <ListItem button onClick={handleCNC}>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="CNC" />
              </ListItem>
              <ListItem button onClick={handleSensor}>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Sensor" />
              </ListItem>
            </List>
        )}

        </Box>

      </Box>
      </div>

</React.Fragment>
  );
}

/*
xs={12} md={12} lg={5}
      <Container maxWidth="sm" className={classes.paper} >

       <Grid container spacing={3}>
      <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
        <List component="nav" aria-label="main mailbox folders">
      <ListSubheader>BPG</ListSubheader>
      <Divider />
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText bgcolor="primary.main" primary="OEE" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="CNC" />
        </ListItem>
      </List>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>        
 
      </Grid>

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function LaunchMenu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
      <ListSubheader>BPG</ListSubheader>
      <Divider />
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText bgcolor="primary.main" primary="OEE" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="CNC" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </div>
  );
}
*/

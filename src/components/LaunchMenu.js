import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { log } from '../utils/log';
import * as AppId from '../constants/AppId';
import * as AppSet from '../constants/AppSet';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function LaunchMenu(params) {
  const { SetCurrentApp, currentApp, appSet, Push } = params;

  const classes = useStyles();
  const handleOEE = () => {
    //    Push('/transition');
    //    OpenDialog200206(true);
    SetCurrentApp(AppId.OEE);
    Push('/oee');
  };
  const handleCNC = () => {
    //    Push('/transition');
    //    OpenDialog200206(true);
    SetCurrentApp(AppId.CNC);
    Push('/oee');
  };
  const handleSensor = () => {
    //    Push('/transition');
    //    OpenDialog200206(true);
    SetCurrentApp(AppId.SENSOR);
    Push('/oee');
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        {appSet == AppSet.BPG && (
          <React.Fragment>
            <List component="nav" aria-label="main mailbox folders">
              <ListSubheader>BPG</ListSubheader>
              <Divider />
              <ListItem button onClick={handleOEE}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText bgcolor="primary.main" primary="OEE" />
              </ListItem>
              <ListItem button onClick={handleCNC}>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="CNC" />
              </ListItem>
            </List>
          </React.Fragment>
        )}
        {appSet == AppSet.HOME && (
          <React.Fragment>
            <List component="nav" aria-label="main mailbox folders">
              <ListSubheader>BPG</ListSubheader>
              <Divider />
              <ListItem button onClick={handleOEE}>
                <ListItemIcon>
                  <InboxIcon />
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
          </React.Fragment>
        )}
      </Container>
    </div>
  );
}

/*

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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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

export default function DialogUpcomingToolChanges(params) {
  const {
    PartProdRateFetch,
    firstDayOfWeek,
    lastDayOfWeek,
    OpenDialog200206,
    View200206,
    Push,
    SetAppError,
    Submitting,
    submitting
  } = params;


  const classes = useStyles();

  const handlePlant11 = () => {
    let start = 0;
    let end = 10;
//    let start = '08/30/2020';
//    let end = '09/05/2020';
    Push('/cnc/transition');
    PartProdRateFetch(
      start,
      end,
      1000,
      0,
      '/cnc/ViewUpcomingToolChanges',
//      '/profit/ViewPartProdRate',
      true,
    ); // will set submitting to false after done.

//    View200206(start, end, 1000, "/oee/view200206", true);  // will set submitting to false after done.
};
  const handlePlant8 = () => {
    let start = 0;
    let end = 10;
    Push('/cnc/transition');
    PartProdRateFetch(
      start,
      end,
      1000,
      0,
      '/cnc/ViewUpcomingToolChanges',
      true,
    ); // will set submitting to false after done.

    //    View200206(start, end, 1000, "/oee/view200206", true);  // will set submitting to false after done.
};
  const handleClose = () => {
    Push("/");
    // OpenDialog200206(false);
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >

    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
        <Box p={1} bgcolor="background.paper" >
            <List component="nav" aria-label="main mailbox folders">
              <ListSubheader className={classes.header} >
              <Paper >
            <AppBar position="static" >
              <Toolbar>
                <PlayCircleFilledWhiteIcon style={{ fontSize: 30 }} />
                <Typography variant="h6" className={classes.s1} >
                  Select Building
                </Typography>
              </Toolbar>
            </AppBar>
          </Paper>
              </ListSubheader>
              <Divider />
              <ListItem button onClick={handlePlant11}>
                <ListItemText bgcolor="primary.main" primary="Plant 11" />
              </ListItem>
              <ListItem button onClick={handlePlant8}>
                <ListItemText primary="Plant 8" />
              </ListItem>
            </List>

        </Box>

      </Box>
    </Dialog>
  );
}



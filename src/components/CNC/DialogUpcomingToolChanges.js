import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from "@material-ui/core/Paper";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import * as BuildingKey from '../../constants/BuildingKey';
import * as BuildingCode from '../../constants/BuildingCode';

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
    UpcomingToolChangesCreate,
    SetUpcomingToolChangesBuildingKey,
    SetUpcomingToolChangesBuildingCode,
    Push,
  } = params;


  const classes = useStyles();

  const handlePlant11 = () => {
    
    Push('/cnc/transition');
    SetUpcomingToolChangesBuildingKey(BuildingKey.PLANT_11); // Avilla
    SetUpcomingToolChangesBuildingCode(BuildingCode.PLANT_11); // Avilla
    UpcomingToolChangesCreate(
      BuildingKey.PLANT_11,
      true,
      1000,
      '/cnc/ViewUpcomingToolChanges',
      true);
};
  const handlePlant6 = () => {
    Push('/cnc/transition');
    SetUpcomingToolChangesBuildingKey(BuildingKey.PLANT_6); // Plant 8 5641
    SetUpcomingToolChangesBuildingCode(BuildingCode.PLANT_6); // Avilla
    UpcomingToolChangesCreate(
      BuildingKey.PLANT_6,
      true,
      1000,
      '/cnc/ViewUpcomingToolChanges',
      true);

};
  const handleClose = () => {
    Push("/cnc");
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
              <ListItem button onClick={handlePlant6}>
                <ListItemText bgcolor="primary.main" primary="Plant 6" />
              </ListItem>
              <ListItem button onClick={handlePlant11}>
                <ListItemText bgcolor="primary.main" primary="Plant 11" />
              </ListItem>
            </List>

        </Box>

      </Box>
    </Dialog>
  );
}



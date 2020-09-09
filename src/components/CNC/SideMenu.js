import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SpeedIcon from '@material-ui/icons/Speed';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

// PROBLEM WITH COLLAPSE SUB LIST AND FIREFOX
// WAIT FOR NEW VERSION OF MATERIAL-UI WHICH HAS NESTE LIST-ITEM COMPONENT
//https://v0.material-ui.com/#/components/list
//https://medium.com/@ali.atwa/getting-started-with-material-ui-for-react-59c82d9ffd93

export default function SideMenu(params) {
  const {
    Push,
  } = params;

  const handleView13319Live = () => {
    Push('/cnc/view13319');
  };
  const handleViewCompareContainerAdHoc = () => {
    Push('/cnc/dialogCompareContainer');
    // Push('/cnc/transition');
    // Submitting(true); // Buttons look at this to see if they should be enabled
    // View200206(firstDayOfWeek, lastDayOfWeek, 1000, '/cnc/view200206', true);
  };
  const handleViewUpcomingToolChanges = () => {
    Push('/cnc/dialogUpcomingToolChanges');
  };
  const handleViewToolChangeSummary = () => {
    Push('/cnc/dialogToolChangeSummary');
  };
  /*
  const handleView200206ThisWeek = () => {
    Push('/oee/transition');
    Submitting(true); // Buttons look at this to see if they should be enabled
    View200206(firstDayOfWeek, lastDayOfWeek, 1000, '/oee/view200206', true);
  };
*/
  /*
  const handleView200206ThisMonth = () => {
    Push('/transition');
    Submitting(true);
    View200206(firstDayOfMonth, lastDayOfMonth, 1000, '/view200206', true);
  };
*/
  return (
    <List>
      <ListSubheader>Live</ListSubheader>
      <Divider />
      <ListItem button onClick={handleView13319Live}>
        <ListItemIcon>
          <SpeedIcon />
        </ListItemIcon>
        <ListItemText primary="CNC" />
      </ListItem>
      <Divider />
      <ListSubheader>Ad-Hoc</ListSubheader>
      <Divider />
      <ListItem button onClick={handleViewCompareContainerAdHoc}>
        <ListItemIcon>
          <GroupWorkIcon />
        </ListItemIcon>
        <ListItemText primary="Compare" />
      </ListItem>
      <ListItem button onClick={handleViewUpcomingToolChanges}>
        <ListItemIcon>
          <GroupWorkIcon />
        </ListItemIcon>
        <ListItemText primary="Tool Changes" />
      </ListItem>
      <ListItem button onClick={handleViewToolChangeSummary}>
        <ListItemIcon>
          <GroupWorkIcon />
        </ListItemIcon>
        <ListItemText primary="Tool Life" />
      </ListItem>

    </List>
  );
}

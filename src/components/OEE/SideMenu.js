import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

// PROBLEM WITH COLLAPSE SUB LIST AND FIREFOX
// WAIT FOR NEW VERSION OF MATERIAL-UI WHICH HAS NESTE LIST-ITEM COMPONENT
//https://v0.material-ui.com/#/components/list
//https://medium.com/@ali.atwa/getting-started-with-material-ui-for-react-59c82d9ffd93

export default function SideMenu(params) {
  const {
    firstDayOfWeek,
    lastDayOfWeek,
    Push,
    View200206,
    Submitting,
  } = params;

  const handleView200206AdHoc = () => {
    Push('/oee/dialog200206');
  };
  const handleView200206ThisWeek = () => {
    Push('/oee/transition');
    Submitting(true); // Buttons look at this to see if they should be enabled
    View200206(firstDayOfWeek, lastDayOfWeek, 1000, '/oee/view200206', true);
  };
  /*
  const handleView200206ThisMonth = () => {
    Push('/transition');
    Submitting(true);
    View200206(firstDayOfMonth, lastDayOfMonth, 1000, '/view200206', true);
  };
*/
  return (
    <List>
      <ListSubheader>Ad-Hoc</ListSubheader>
      <Divider />
      <ListItem button onClick={handleView200206AdHoc}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="OEE by Part" />
      </ListItem>
      <Divider />
      <ListSubheader>Week</ListSubheader>
      <Divider />
      <ListItem button onClick={handleView200206ThisWeek}>
        <ListItemIcon>
          <GroupWorkIcon />
        </ListItemIcon>
        <ListItemText primary="OEE by Part" />
      </ListItem>
    </List>
  );
}

import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SpeedIcon from '@material-ui/icons/Speed';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import GroupWorkIcon from '@material-ui/icons/GroupWork';


export default function SideMenu(params) {
  const {
    Push,
  } = params;

  const handleViewProductionRate = () => {
    Push('/cnc/ViewProductionRate');
  };
  const handleViewToolingRate = () => {
    Push('/cnc/ViewProdutionRate');
  };

  /*
  const handleView200206ThisWeek = () => {
    Push('/oee/transition');
    Submitting(true); // Buttons look at this to see if they should be enabled
    View200206(firstDayOfWeek, lastDayOfWeek, 1000, '/oee/view200206', true);
  };
*/
  return (
    <List>
      <ListSubheader>Rates</ListSubheader>
      <Divider />
      <ListItem button onClick={handleViewProductionRate}>
        <ListItemIcon>
          <SpeedIcon />
        </ListItemIcon>
        <ListItemText primary="Production" />
      </ListItem>
      <Divider />
      <ListItem button onClick={handleViewToolingRate}>
        <ListItemIcon>
          <GroupWorkIcon />
        </ListItemIcon>
        <ListItemText primary="Tooling" />
      </ListItem>
    </List>
  );
}

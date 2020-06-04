import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import { log } from '../utils/log';

// PROBLEM WITH COLLAPSE SUB LIST AND FIREFOX
// WAIT FOR NEW VERSION OF MATERIAL-UI WHICH HAS NESTE LIST-ITEM COMPONENT
//https://v0.material-ui.com/#/components/list
//https://medium.com/@ali.atwa/getting-started-with-material-ui-for-react-59c82d9ffd93
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function VisualizationsList(params) {
  const {
    firstDayOfWeek,
    lastDayOfWeek,
    firstDayOfMonth,
    lastDayOfMonth,
    Push,
    OpenDialog200206,
    View200206,
    Submitting,
  } = params;
  const [openFixedOEE, setOpenFixedOEE] = React.useState(true);
  const [openSelectOEE, setOpenSelectOEE] = React.useState(true);

  const handleView200206AdHoc = () => {
    Push('/transition');
    OpenDialog200206(true);
  };
  const handleView200206ThisWeek = () => {
    Push('/transition');
    Submitting(true);  // Buttons look at this to see if they should be enabled
    View200206(firstDayOfWeek, lastDayOfWeek, 1000, '/view200206', true);
  };
  const handleView200206ThisMonth = () => {
    Push('/transition');
    Submitting(true);
    View200206(firstDayOfMonth, lastDayOfMonth, 1000, '/view200206', true);
  };

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
      <ListSubheader>This Week</ListSubheader>
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

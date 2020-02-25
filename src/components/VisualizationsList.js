import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from "@material-ui/core/Divider";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import { log } from "../utils/log";

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
    isAuthenticated,
    isAdmin,
    firstDayOfWeek,
    lastDayOfWeek,
    firstDayOfMonth,
    lastDayOfMonth,
    Push,
    OpenDialog200206,
    View200206,
    Submitting,
    } = params;
  const classes = useStyles();
  const [openAdHocOEE, setOpenAdHocOEE] = React.useState(true);
  const [openFixedOEE, setOpenFixedOEE] = React.useState(true);
  const [openSelectOEE, setOpenSelectOEE] = React.useState(true);

  const handleAdHocOEEClick = () => {
    log("In handleAdHocOEEClick")
    Push("/");
    setOpenAdHocOEE(!openAdHocOEE);
  };

  const handleFixedOEEClick = () => {
        Push("/");
    setOpenFixedOEE(!openFixedOEE);
  };
  const handleSelectOEEClick = () => {
    Push("/");
    setOpenSelectOEE(!openSelectOEE);
  };
  /*
  const handleSproc200206Create = () => {
    Sproc200206Create("2020-02-01T00:00:00","2020-02-07T23:59:00");
  }
  */
  /*
  const handleSproc200206Dialog = () => {
    Push("/sproc200206params");
  }
  */
  const handleView200206AdHoc = () => {
    Push("/transition")
    OpenDialog200206(true);
  }
  const handleView200206ThisWeek = () => {
    Push("/transition")
    Submitting(true);
    View200206(firstDayOfWeek,lastDayOfWeek,1000,"/view200206",true);

  }
  const handleView200206ThisMonth = () => {
    Push("/transition")
    Submitting(true);
    View200206(firstDayOfMonth,lastDayOfMonth,1000,"/view200206",true);

  }

  return (
    <List>
    <ListSubheader>Ad-Hoc</ListSubheader>
    <Divider />
    <ListItem button onClick={handleView200206AdHoc}>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="OEE by Part" />
      </ListItem >
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
/*
NOT IMPLEMENTED
<Divider />
<ListSubheader>This Month</ListSubheader>
<Divider />
<ListItem button onClick={handleView200206ThisMonth}>
<ListItemIcon>
  <GroupWorkIcon />
</ListItemIcon>
<ListItemText primary="OEE by Part" />
</ListItem>

*/

/*
export default function Dashboard({ isAuthenticated, isAdmin, Push }) {
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    if (!isAuthenticated) {
      Push("/login");
    }
  });
*/

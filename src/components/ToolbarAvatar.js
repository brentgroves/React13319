import React, { useEffect } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { white,grey,blueGrey,lightBlue,indigo,deepOrange, deepPurple } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import AppsIcon from '@material-ui/icons/Apps';
import IconButton from '@material-ui/core/IconButton';
import * as AppId from '../constants/AppId';
import * as AppSet from '../constants/AppSet';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as common from '@bgroves/common';
import { SetAccount } from '../actions';
import * as errorType from '../constants/ErrorType'
import * as errorSeverity from '../constants/ErrorSeverity'

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

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
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
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
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  avatar:  {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: indigo[500],
    backgroundColor: theme.palette.common.white,
//    color: theme.palette.getContrastText(indigo[500]),
//    backgroundColor: indigo[500],
  },
  orange:  {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));


export default function ToolbarAvatar({
  isAuthenticated,
  msalInstance,
  name,
  initials,
  department,
  companyName,
  Push,
  currentApp,
  SetCurrentApp,
  SetAppError,
  appSet,
  Logout,
}) {
 // common.log(`currentApp=${currentApp}`);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  // const [initials, setInitials] = React.useState('MS');

  useEffect(() => {
    // if (!isAuthenticated) {
    //   Push('/login');
    // }
  });
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOEE = () => {
    setAnchorEl(null);
//    Push('/oee');
//    SetCurrentApp(AppId.OEE);
  };
  const handleCNC = () => {
    setAnchorEl(null);
    Push('/cnc');
    SetCurrentApp(AppId.CNC);
  };
  const handleProfit = () => {
    setAnchorEl(null);
    Push('/profit');
    SetCurrentApp(AppId.PROFIT);
  };
  /*
  const handleSensor = () => {
    //    Push('/transition');
    //    OpenDialog200206(true);
    // setAnchorEl(event.currentTarget);
    setAnchorEl(null);
    SetCurrentApp(AppId.SENSOR);
    // Push('/oee');
    SetCurrentApp(AppId.CNC);
  };
*/
  const handleLogout = () => {
    setAnchorEl(null);
    msalInstance.logout();
    SetAppError('Test',errorType.SAGA,errorSeverity.LOW);
  };

  return (
    <React.Fragment>
    <CssBaseline />
      {/* 
                <IconButton color="inherit">
                  <Badge onClick={handleLogout} color="primary">
                    <ExitToAppIcon />
                  </Badge>
                </IconButton>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>


                */}
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography variant="subtitle2" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {companyName}
      </Typography>
       {/* <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"} */}
          </React.Fragment>
        }
      >
      <IconButton color="inherit" onClick={handleClick} >
        <Badge badgeContent={0}  color="secondary">
          <Avatar className={ classes.avatar}>{initials}</Avatar>
        </Badge>
      </IconButton>
      </HtmlTooltip>
    </React.Fragment>
  );
}

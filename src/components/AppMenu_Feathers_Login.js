import React, { useEffect } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Badge from '@material-ui/core/Badge';
import AppsIcon from '@material-ui/icons/Apps';
import IconButton from '@material-ui/core/IconButton';
import * as AppId from '../constants/AppId';
import * as AppSet from '../constants/AppSet';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as common from '@bgroves/common';

export default function AppMenu({
  isAuthenticated,
  msalInstance,
  Push,
  currentApp,
  SetCurrentApp,
  appSet,
  Logout,
}) {
  common.log(`currentApp=${currentApp}`);
  const [anchorEl, setAnchorEl] = React.useState(null);

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
    Push('/oee');
    SetCurrentApp(AppId.OEE);
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
    Logout();
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

      <IconButton color="inherit" onClick={handleClick} >
        <Badge badgeContent={0}  color="secondary">
          <AppsIcon />
        </Badge>
      </IconButton>
      {appSet === AppSet.BPG && (
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {currentApp !== AppId.OEE && (
                <MenuItem onClick={handleOEE}>OEE</MenuItem>
            )}
            {currentApp !== AppId.CNC && (
                <MenuItem onClick={handleCNC}>CNC</MenuItem>
            )}
            {currentApp !== AppId.PROFIT && (
                <MenuItem onClick={handleProfit}>Profit</MenuItem>
            )}
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
      )}
      {appSet === AppSet.HOME && (
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {currentApp !== AppId.OEE && (
                <MenuItem onClick={handleOEE}>OEE</MenuItem>
            )}
            {currentApp !== AppId.CNC && (
                <MenuItem onClick={handleCNC}>CNC</MenuItem>
            )}
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
      )}
    </React.Fragment>
  );
}

import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Badge from '@material-ui/core/Badge';
import AppsIcon from '@material-ui/icons/Apps';
import IconButton from '@material-ui/core/IconButton';
import { log } from '../utils/log';
import * as AppId from '../constants/AppId';
import * as AppSet from '../constants/AppSet';
export default function SimpleMenu({
  Push,
  currentApp,
  SetCurrentApp,
  appSet,
  Logout,
}) {
  log(`currentApp=${currentApp}`);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOEE = () => {
    //    Push('/transition');
    //    OpenDialog200206(true);
    // setAnchorEl(event.currentTarget);
    setAnchorEl(null);
    Push('/oee');
    SetCurrentApp(AppId.OEE);
  };
  const handleCNC = () => {
    //    Push('/transition');
    //    OpenDialog200206(true);
    // setAnchorEl(event.currentTarget);
    setAnchorEl(null);
    Push('/oee');
    SetCurrentApp(AppId.CNC);
  };
  const handleSensor = () => {
    //    Push('/transition');
    //    OpenDialog200206(true);
    // setAnchorEl(event.currentTarget);
    setAnchorEl(null);
    SetCurrentApp(AppId.SENSOR);
    Push('/oee');
    SetCurrentApp(AppId.CNC);
  };

  const handleLogout = () => {
    Logout();
  };

  return (
    <div>
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

      <IconButton color="inherit">
        <Badge badgeContent={0} onClick={handleClick} color="secondary">
          <AppsIcon />
        </Badge>
      </IconButton>
      {appSet == AppSet.BPG && (
        <React.Fragment>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {currentApp !== AppId.OEE && (
              <React.Fragment>
                <MenuItem onClick={handleOEE}>OEE</MenuItem>
              </React.Fragment>
            )}
            {currentApp !== AppId.CNC && (
              <React.Fragment>
                <MenuItem onClick={handleCNC}>CNC</MenuItem>
              </React.Fragment>
            )}
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
      {appSet == AppSet.HOME && (
        <React.Fragment>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {currentApp !== AppId.OEE && (
              <React.Fragment>
                <MenuItem onClick={handleOEE}>OEE</MenuItem>
              </React.Fragment>
            )}
            {currentApp !== AppId.CNC && (
              <React.Fragment>
                <MenuItem onClick={handleCNC}>CNC</MenuItem>
              </React.Fragment>
            )}
            {currentApp !== AppId.SENSOR && (
              <React.Fragment>
                <MenuItem onClick={handleSensor}>SENSOR</MenuItem>
              </React.Fragment>
            )}
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </div>
  );
}

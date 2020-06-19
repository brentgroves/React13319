import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Badge from "@material-ui/core/Badge";
import AppsIcon from '@material-ui/icons/Apps';
import IconButton from "@material-ui/core/IconButton";

export default function SimpleMenu({
  Push,
  Logout,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>OEE</MenuItem>
        <MenuItem onClick={handleClose}>Profit</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
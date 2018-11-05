import React, { Component } from 'react';
import Auth from '../Auth';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

class Navigation extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <div className="header-bar-item">Stadium Tracker</div>
          <div>
            <Auth />
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navigation;

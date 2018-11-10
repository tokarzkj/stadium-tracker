import React, { Component } from 'react';
import Auth from '../Auth';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NavigationMenu from './NavigationMenu';

class Navigation extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <NavigationMenu />
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

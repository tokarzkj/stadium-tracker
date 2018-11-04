import React, { Component } from 'react';
import './App.css';
import Auth from './Auth';
import 'typeface-roboto';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;

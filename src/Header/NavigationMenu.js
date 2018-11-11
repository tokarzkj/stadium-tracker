import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from "react-router-dom";
import '../App.css';

export default class NavigationMenu extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="Menu"
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}>
          <MenuIcon />
        </IconButton>
          <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
          >
              <div>
              <NavLink to="/"
                className="menu-link">
                  <MenuItem onClick={this.handleClose}>
                    Home
                  </MenuItem>
                </NavLink>
                <NavLink to="/stadium/visit"
                  className="menu-link">
                  <MenuItem onClick={this.handleClose}>

                    Visit Stadium
                  </MenuItem>
                </NavLink>
              </div>
          </Menu>
        </div>
    )
  }
}

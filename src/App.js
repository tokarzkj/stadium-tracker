import React, { Component } from 'react';
import './App.css';
import Auth from './Auth';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Grid container
          direction="row"
          justify="space-between">
            <Grid
              item>
              <div className="header-bar-item">Stadium Tracker</div>
            </Grid>
            <Grid item>
              <div className="header-bar-item">
                <Auth className="header-bar-item" />
              </div>
            </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;

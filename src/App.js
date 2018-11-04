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
          padding={20}>
            <Grid
              item
              sm={11}>
              <div>Stadium Tracker</div>
            </Grid>
            <Grid item>
              <Auth />
            </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;

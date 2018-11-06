import React, { Component } from 'react';
import CreateStadiumCard from './CreateStadiumCard';
import '../App.css';
import Grid from '@material-ui/core/Grid';

export default class HomePageCardList extends Component {
  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center" sm="12">
        <Grid item>
          <CreateStadiumCard />
        </Grid>
      </Grid>
    )
  }
}

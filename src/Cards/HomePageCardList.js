import React, { Component } from 'react';
import CreateStadiumCard from './CreateStadiumCard';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import ViewStadiumsCard from './ViewStadiumsCard';

export default class HomePageCardList extends Component {
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <CreateStadiumCard />
        </Grid>
        <Grid>
          <ViewStadiumsCard />
        </Grid>
      </Grid>
    )
  }
}

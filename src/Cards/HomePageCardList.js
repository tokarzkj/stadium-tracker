import React, { Component } from 'react';
import CreateStadiumCard from './CreateStadiumCard';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import ViewStadiumsCard from './ViewStadiumsCard';
import { NflCard } from './NflCard';

export default class HomePageCardList extends Component {
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center" spacing={32}>
        <Grid item>
          <CreateStadiumCard />
        </Grid>
        <Grid item>
          <ViewStadiumsCard />
        </Grid>
        <Grid item>
          <NflCard />
        </Grid>
      </Grid>
    )
  }
}

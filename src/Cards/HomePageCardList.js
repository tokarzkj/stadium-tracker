import React, { Component } from 'react';
import CreateStadiumCard from './CreateStadiumCard';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import ViewStadiumsCard from './ViewStadiumsCard';
import { NflCard } from './NflCard';

export default class HomePageCardList extends Component {
  render() {
    return (
      <Grid container direction="row" spacing={32} justify="flex-start">
        <Grid item xs={12}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={2}>
          <CreateStadiumCard />
        </Grid>
        <Grid item xs={2}>
          <ViewStadiumsCard />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
        <h3>League Center</h3>
          <hr></hr>
        </Grid>
        <Grid item xs={2}>
          <NflCard />
        </Grid>
      </Grid>
    )
  }
}

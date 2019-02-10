import React, { Component } from 'react';
import CreateStadiumCard from './CreateStadiumCard';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import ViewStadiumsCard from './ViewStadiumsCard';
import { NflCard } from './NflCard';
import { HeadLineCard } from './HeadlineCard';
import { RecentlyViewedHeadlineCard } from './RecentlyViewedHeadlineCard';

export default class HomePageCardList extends Component {
  render() {
    return (
      <Grid container direction="row" spacing={32} justify="flex-start">
        <Grid item md={12}></Grid>
        <Grid item md={4}></Grid>
        <Grid item md={2}>
          <CreateStadiumCard />
        </Grid>
        <Grid item md={2}>
          <ViewStadiumsCard />
        </Grid>
        <Grid item md={4}></Grid>
        <Grid item md={12}></Grid>
        <Grid item md={12}></Grid>
        <Grid item lg={12} wrap='nowrap'>
          <h3>League Center</h3>
          <hr></hr>
        </Grid>
        <Grid item md={2}>
          <NflCard />
        </Grid>
        <Grid item md={2}>
          <HeadLineCard />
        </Grid>
        <Grid item md={2}>
          <RecentlyViewedHeadlineCard />
        </Grid>
      </Grid>
    )
  }
}

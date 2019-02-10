import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import { Link } from 'react-router-dom';

export class RecentlyViewedHeadlineCard extends Component {
  render() {
    return (
      <Link to="/news/viewed/recently">
        <Card className="card homepage-card">
          <CardHeader
            title="Recently Viewed Headlines"
          />
          <CardContent>
            <Typography>
              This is where you can view headlines you have looked at.
            </Typography>
          </CardContent>
        </Card>
      </Link>
    )
  }
}
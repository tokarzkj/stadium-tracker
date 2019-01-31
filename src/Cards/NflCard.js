import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import { Link } from 'react-router-dom';

export class NflCard extends Component {
  render() {
    return (
      <Link to="/leagues/nfl">
        <Card className="card homepage-card">
          <CardHeader
            title="Search NFL"
          />
          <CardContent>
            <Typography>
              This is where you can search NFL Venues.
            </Typography>
          </CardContent>
        </Card>
      </Link>
    )
  }
}
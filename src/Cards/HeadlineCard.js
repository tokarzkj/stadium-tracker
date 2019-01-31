import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import { Link } from 'react-router-dom';

export class HeadLineCard extends Component {
  render() {
    return (
      <Link to="/news/headlines">
        <Card className="card homepage-card">
          <CardHeader
            title="ESPN Headlines"
          />
          <CardContent>
            <Typography>
              This is where you can view headlines from ESPN.
            </Typography>
          </CardContent>
        </Card>
      </Link>
    )
  }
}
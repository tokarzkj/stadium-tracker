import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import { Link } from 'react-router-dom';

class ViewStadiumsCard extends Component {
  render() {
    return (
      <Link to="/stadium/stadiums">
        <Card className="card">
          <CardHeader
            title="Show stadium"
          />
          <CardContent>
            <Typography>
              View the stadiums you have visited
            </Typography>
          </CardContent>
        </Card>
      </Link>
    )
  }
}

export default ViewStadiumsCard;

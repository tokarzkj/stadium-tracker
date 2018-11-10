import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import { Link } from 'react-router-dom';

class CreateStadiumCard extends Component {
  render() {
    return (
      <Link to="/stadium/visit">
        <Card className="card">
          <CardHeader
            title="Visit stadium"
          />
          <CardContent>
            <Typography>
              This is where you will create your next stadium memory. Click on this Card
              to create a new one!
            </Typography>
          </CardContent>
        </Card>
      </Link>
    )
  }
}

export default CreateStadiumCard;

import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../App.css';

class CreateStadiumCard extends Component {
  render() {
    return (
      <Card className="card">
        <CardHeader
          title="Visit stadium"
        />
        <CardContent>
          <Typography>
            Lets setup your next stadium visit!
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default CreateStadiumCard;

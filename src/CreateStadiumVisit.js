import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './App.css';

export default class CreateStadiumVisit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stadiumName: '',
      visitDate: new Date(),
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({stadiumName: event.target.value});
  }

  handleDateChange(event) {
    this.setState({visitDate: event.target.value});
  }

  handleSubmit(event) {
    alert('test');
    event.preventDefault();
  }

  render() {
    const today = new Date().toString();
    return(
      <form onSubmit={this.handleSubmit}>
        <Grid
          container
          direction="column"
          spacing={24}>
          <Grid
            item>
            <TextField
              id="stadium-name"
              label="Stadium Name"
              value={this.state.stadiumName}
              onChange={this.handleNameChange}
            />
          </Grid>
          <Grid
            item>
            <TextField
              id="date-visited"
              label="Date Visited:"
              type="date"
              onChange={this.handleDateChange}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid
            item>
            <Button
              variant="contained"
              color="primary"
              type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    )
  }
}

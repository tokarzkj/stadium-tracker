import React, { Component } from 'react';

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
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Stadium Name:
          <input type="text" value={this.state.stadiumName} onChange={this.handleNameChange} />
        </label>
        <label>
          Date Visited:
          <input type="date" value={this.state.visitDate} onChange={this.handleDateChange} />
        </label>
      </form>
    )
  }
}

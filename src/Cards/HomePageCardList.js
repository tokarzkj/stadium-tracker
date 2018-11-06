import React, { Component } from 'react';
import CreateStadiumCard from './CreateStadiumCard';
import '../App.css';

export default class HomePageCardList extends Component {
  render() {
    return (
      <div className="homepage-container">
        <CreateStadiumCard />
      </div>
    )
  }
}

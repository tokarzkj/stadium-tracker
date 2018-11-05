import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import Navigation from './Header/Navigation';
import CreateStadiumCard from './Cards/CreateStadiumCard';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div>
          <CreateStadiumCard className='Homepage-card' />
        </div>
      </div>
    );
  }
}

export default App;

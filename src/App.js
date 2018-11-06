import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import Navigation from './Header/Navigation';
import HomagePageCardList from './Cards/HomePageCardList';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div>
          <HomagePageCardList />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import Navigation from './Header/Navigation';
import HomePageCardList from './Cards/HomePageCardList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div>
          <HomePageCardList />
        </div>
      </div>
    );
  }
}

export default App;

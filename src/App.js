import React, { Component } from 'react';
import './App.css';
import 'typeface-roboto';
import Navigation from './Header/Navigation';
import HomePageCardList from './Cards/HomePageCardList';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CreateStadiumVisit from './CreateStadiumVisit';
import Stadiums from './Stadiums';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Router>
            <div>
              <Navigation />
              <Switch>
                <Route exact path="/" component={HomePageCardList} />
                <Route path="/stadium/visit" component={CreateStadiumVisit} />
                <Route path="/stadium/stadiums" component={Stadiums} />
              </Switch>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;

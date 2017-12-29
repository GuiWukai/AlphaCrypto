import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Main } from './pages/main';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Main}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

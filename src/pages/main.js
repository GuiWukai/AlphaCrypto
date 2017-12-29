import React, {Component} from 'react';
import {Graph, NavBar, Drawer} from '../components';

export class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      current: {
        name: "Bitcoin",
        id: "crypto",
        exchange: "bitfinex",
        time: "1H",
        book: "btcusd"
      }
    }
    this.handleState = this
      .handleState
      .bind(this)
  }

  handleState(n, b) {
    let current = this.state.current;
    current.name = n;
    current.book = b.toLowerCase()+"usd";
    this.setState({current: current});
  }

  render() {
    var handleState = this.handleState;

    return (
      <div className="App">
        <div className="navBar">
          <NavBar/>
        </div>
        <div className="main">
          <div className="chart-container">
            <Graph current={this.state.current}/>
          </div>
          <div className="sidebar-container">
            <Drawer
              currentBook={this.state.current.book}
              handleState={handleState}/>
          </div>
        </div>
      </div>
    );
  }
}
import React, {Component} from 'react';
import {Menu, Content, NavBar, Drawer} from '../components';

export class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      current: {
        name: "Bitcoin",
        id: "crypto",
        exchange: "bitfinex",
        time: "1H",
        book: "btcusd",
        tab: "graph"
      }
    }
    this.handleState = this
      .handleState
      .bind(this)

    this.handleMenu = this
      .handleMenu
      .bind(this)
  }

  handleState(n, b) {
    let current = this.state.current;
    current.name = n;
    current.book = b.toLowerCase() + "usd";
    this.setState({current: current});
  }

  handleMenu(tab) {
    let current = this.state.current;
    current.tab = tab;
    this.setState({current: current});
  }

  render() {
    var handleState = this.handleState;
    var handleMenu = this.handleMenu;
    var currentTab = this.state.current.tab;

    return (
      <div className="App">
        <div className="navBar">
          <NavBar/>
        </div>
        <div className="main">
          <div className="content-container">
            <Menu handleMenu={handleMenu} currentTab = {currentTab}/>
            <Content current={this.state.current}/>
          </div>
          <div className="sidebar-container shadow">
            <Drawer currentBook={this.state.current.book} handleState={handleState}/>
          </div>
        </div>
      </div>
    );
  }
}
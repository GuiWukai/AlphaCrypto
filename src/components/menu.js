import React, {Component} from 'react';

export class Menu extends Component {
    
    render() {
        const handleMenu = this.props.handleMenu
        var currentTab = this.props.currentTab

        return (
            <div className="menu">
                <div className="menu-wrap">
                <button className={"tab shadow "+((currentTab==="graph")?("tab--current"):(""))} onClick={() => handleMenu("graph")}>Graph</button>
                <button className={"tab shadow "+((currentTab==="stats")?("tab--current"):(""))} onClick={() => handleMenu("stats")}>Stats</button>
                <button className={"tab shadow "+((currentTab==="description")?("tab--current"):(""))} onClick={() => handleMenu("description")}>Description</button>
                <button className={"tab shadow "+((currentTab==="team")?("tab--current"):(""))} onClick={() => handleMenu("team")}>Team</button>
                <button className={"tab shadow "+((currentTab==="vc")?("tab--current"):(""))} onClick={() => handleMenu("vc")}>Venture Capital</button>
                </div>
            </div>
        );
    }
}
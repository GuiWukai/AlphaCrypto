import React, {Component} from 'react';
import '../App';
import CryptowatchEmbed from 'cryptowatch-embed';
import {DataBar} from './dataBar';
import $ from 'jquery';

export class Graph extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.current
    }

    componentDidUpdate() {
        let chart = new CryptowatchEmbed(this.state.exchange, this.state.book, {timePeriod: this.state.time});
        let id = "#" + this.state.id;
        $(id).html("");
        chart.mount(id);
    }

    componentDidMount() {
        let chart = new CryptowatchEmbed(this.state.exchange, this.state.book, {timePeriod: this.state.time});
        let id = "#" + this.state.id;
        chart.mount(id);
    }

    render() {
        return (
            <div className="chart-wrap">
                <DataBar name={this.state.name}/>
                <div id="graph2"></div>
                <div className="chart" id={this.state.id}></div>
            </div>
        );
    }
}
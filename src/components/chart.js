import React, {Component} from 'react';
import '../App';
import CryptowatchEmbed from 'cryptowatch-embed';
import $ from 'jquery';

export class Chart extends Component {

    componentDidUpdate() {
        var current = this.props.current
        let chart = new CryptowatchEmbed(current.exchange, current.book, {timePeriod: current.time});
        let id = "#" + current.id;
        $(id).html("");
        chart.mount(id);
    }

    componentDidMount() {
        var current = this.props.current
        let chart = new CryptowatchEmbed(current.exchange, current.book, {timePeriod: current.time});
        let id = "#" + current.id;
        chart.mount(id);
    }

    render() {
        var current = this.props.current
        return (
            <div className="chart" id={current.id}></div>
        );
    }
}
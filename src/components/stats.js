import React, {Component} from 'react';
import $ from 'jquery';
var numeral = require('numeral');
var cryptoInterval;

function loadData(n) {
    $.get("https://api.coinmarketcap.com/v1/ticker/", function(data, status){
        data.forEach(element => {
            if (element.name === n) {
                let name = element.name;
                $("#name").html(name);

                let symbol = element.symbol;
                $("#symbol").html(symbol);

                let market_cap_usd = numeral(element.market_cap_usd).format('$0,0[.]00');
                $("#market_cap_usd").html(market_cap_usd);

                let price_usd = numeral(element.price_usd).format('$0,0[.]00');
                $("#price_usd").html(price_usd);

                let total_supply = numeral(element.total_supply).format('0,0');
                $("#total_supply").html(total_supply);

                let available_supply = numeral(element.available_supply).format('0,0');
                $("#available_supply").html(available_supply);

                if(element.max_supply === null){
                    $("#max_supply").html("none");
                }else{
                    let max_supply = numeral(element.max_supply).format('0,0');
                    $("#max_supply").html(max_supply);
                }
                
                let v24 = numeral(element["24h_volume_usd"]).format('$0,0[.]00');
                $("#24h_volume_usd").html(v24);

                let pc1 = element.percent_change_1h + "%";
                let pc1Dom = $("#percent_change_1h");
                pc1Dom.html(pc1);
                Math.sign(element.percent_change_1h) === 1
                    ? pc1Dom.css("color", "#093")
                    : pc1Dom.css("color", "#d14836");

                let pc24 = element.percent_change_24h + "%";
                let pc24Dom = $('#percent_change_24h');
                pc24Dom.html(pc24);
                Math.sign(element.percent_change_24h) === 1
                    ? pc24Dom.css("color", "#093")
                    : pc24Dom.css("color", "#d14836");

                let pc7d = element.percent_change_7d + "%";
                let pc7dDom = $("#percent_change_7d");
                pc7dDom.html(pc7d);
                Math.sign(element.percent_change_7d) === 1
                    ? pc7dDom.css("color", "#093")
                    : pc7dDom.css("color", "#d14836");
            }
        });
    });
}
export class Stats extends Component {

    componentDidMount() {
        var n = this.props.name
        window.clearInterval(cryptoInterval);        
        loadData(n)
        cryptoInterval = setInterval(() => {
            loadData(n)
        }, 3000);
    }

    componentDidUpdate() {
        var n = this.props.name
        window.clearInterval(cryptoInterval);
        loadData(n)
        cryptoInterval = setInterval(() => {
            loadData(n)
        }, 3000);
    }

    render() {
        return (
            <div className="dataBar">
                <h3>{this.props.name} / Stats</h3>
                <table className="dataTable">
                    <thead>
                        <tr className="dataHead">
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Market Cap</th>
                            <th>price</th>
                            <th>Volume(24H)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="name"></td>
                            <td id="symbol"></td>
                            <td id="market_cap_usd"></td>
                            <td id="price_usd"></td>
                            <td id="24h_volume_usd"></td>
                        </tr>
                    </tbody>
                </table>
                <table className="dataTable">
                    <thead>
                        <tr className="dataHead">
                            <th>Total Supply</th>
                            <th>Available Supply</th>
                            <th>Max Supply</th>
                            <th>% 1h</th>
                            <th>% 24h</th>
                            <th>% 7d</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="total_supply"></td>
                            <td id="available_supply"></td>
                            <td id="max_supply"></td>
                            <td id="percent_change_1h"></td>
                            <td id="percent_change_24h"></td>
                            <td id="percent_change_7d"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
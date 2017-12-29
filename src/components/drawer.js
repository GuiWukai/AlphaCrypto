import React, {Component} from 'react';
import List, {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
var drawerInterval = 1;

export class Drawer extends Component {
    constructor(props) {
        super(props)
        var xhr = new XMLHttpRequest()
        xhr.open("GET", "https://api.coinmarketcap.com/v1/ticker/", true)
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var newData = JSON.parse(xhr.response)
                    this.setState({data: newData});
                } else {
                    console.error(xhr.statusText)
                }
            }
        }.bind(this)
        xhr.onerror = function (e) {
            console.error(xhr.statusText)
        }
        xhr.send(null)
    }

    componentDidMount() {
        window.clearInterval(drawerInterval);
        drawerInterval = setInterval(() => {
            var xhr = new XMLHttpRequest()
            xhr.open("GET", "https://api.coinmarketcap.com/v1/ticker/", true)
            xhr.onload = function (e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var newData = JSON.parse(xhr.response)
                        this.setState({data: newData});
                    } else {
                        console.error(xhr.statusText)
                    }
                }
            }.bind(this)
            xhr.onerror = function (e) {
                console.error(xhr.statusText)
            }
            xhr.send(null)
        }, 3000);
    }

    render() {
        const handleState = this.props.handleState

        return (
            <div className="sidebar">
                <List>
                    {(this.state != null)
                        ? (this.state.data.map((crypto, i) => <div key={i}>
                            <ListItem button onClick={() => handleState(crypto.name, crypto.symbol)}>
                                <div className="drawer__tab__name">{crypto.rank + ". "}{crypto.name}</div>
                                {(Math.sign(crypto.percent_change_24h) === 1)
                                    ? (
                                        <div className="pos drawer__tab__pc24">{crypto.percent_change_24h + "%"}</div>
                                    )
                                    : (
                                        <div className="neg drawer__tab__pc24">{crypto.percent_change_24h + "%"}</div>
                                    )}
                            </ListItem>
                            <Divider/>
                        </div>))
                        : (
                            <div></div>
                        )}
                </List>
            </div>
        );
    }

}
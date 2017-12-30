import React, {Component} from 'react';
import '../App';
import vc from '../data/vcData';

export class VC extends Component {
    
    render() {
        var vc_of_coin = vc[this.props.name]
        var content;
        if(vc_of_coin === undefined){
            content = <div>no data</div>
        }else{
            content = vc_of_coin.map((vcoc, i) => 
                <div key={i}>{vcoc}</div>)
        }
        return (
            <div className="vc">
                <h3>{this.props.name} / Venture Capital</h3>
                {content}
            </div>
        );
    }
}
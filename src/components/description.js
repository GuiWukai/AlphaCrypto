import React, {Component} from 'react';
import '../App';
import descriptionList from '../data/descriptionData';
export class Description extends Component {

    render() {
        var description = descriptionList[this.props.name] 
        var content;
        if(description !== undefined){
            content = description
        }else{
            content = "no info"
        }
        
        return (
            <div className="description">
                <h3>{this.props.name} / Description</h3>
                <div className="coin-description">
                    {content}
                </div>
            </div>
        );
    }
}
import React, {Component} from 'react';
import '../App';
import team from '../data/teamData';

export class Team extends Component {

    render() {
        var coinMembers = team[this.props.name] 
        var content;
        if(coinMembers !== undefined){
            content = coinMembers.map((member ,i ) =>
            <div className="member">
                <div>{member.name}</div>
                <div>{member.role}</div>
                <a href={member.link} target="_blank">{member.link}</a>
                <hr/>
            </div>)
        }else{
            content = "no data"
        }
        
        return (
            <div className="team">
                <h3>{this.props.name} / Team</h3>
                <div className="team-description">
                    {content}
                </div>
                
            </div>
        );
    }
}
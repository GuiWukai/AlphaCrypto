import React, {Component} from 'react';
import '../App';
import {Stats} from './stats';
import {Chart} from './chart';
import {Team} from './team';
import {VC} from './vc';
import {Description} from './description';

export class Content extends Component {
    render() {
        var content
        var current = this.props.current
        if(current.tab === "graph"){
            content = <Chart current={current}/>
        }else if(current.tab === "stats"){
            content = <Stats name={current.name}/>
        }else if(current.tab === "team"){
            content = <Team name={current.name}/>
        }else if(current.tab === "vc"){
            content = <VC name={current.name}/>
        }else if(current.tab === "description"){
            content = <Description name = {current.name}/>
        }

        return (
            <div className="content-wrap shadow">
                {content}
            </div>
        );
    }
}
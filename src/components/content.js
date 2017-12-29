import React, {Component} from 'react';
import '../App';
import {Stats} from './stats';
import {Chart} from './chart';

export class Content extends Component {
    render() {
        var content
        var current = this.props.current
        if(current.tab === "graph"){
            content = <Chart current={current}/>
        }else if(current.tab === "stats"){
            content = <Stats name={current.name}/>
        }

        return (
            <div className="content-wrap shadow">
                {content}
            </div>
        );
    }
}
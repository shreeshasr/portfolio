import React, { Component } from 'react';
import './SingleCount.css';
import CountUp from 'react-countup';

export default class SingleCount extends Component {
    render() {
        return (
            <div className="singlecount-container">
                <i className={`fa fa-${this.props.icon}`} aria-hidden="true"></i>
                <p><CountUp duration={10} start={0} end={this.props.count}/></p>
                <p>{this.props.info}</p>
            </div>
        )
    }
}

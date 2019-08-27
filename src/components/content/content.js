import React, { Component } from 'react';

import SelectYear from '../select-year/select-year';
import Circuits from '../circuits/circuits';



export default class Content extends Component {



    render() {

        return (
            <div className={"content"}>
                
                <SelectYear year={this.props.year} handleYearChange={this.props.handleYearChange}/>
                
                <Circuits year={this.props.year} circuitsYears={this.props.circuitsYears}/>
                
            </div>
        );
    }
}




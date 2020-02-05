import React, { Component } from 'react';

import SelectYear from '../select-year/select-year';
import logo from '../../images/logo-w.png';

export default class Content extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <div>
                <div className={"header"}>
                    <img src={logo} alt="Logo" />
                    <SelectYear year={this.props.year} handleYearChange={this.props.handleYearChange} handleResetZoom={this.props.handleResetZoom}/>
                </div>
                
                            
            </div>
        );
    }
}




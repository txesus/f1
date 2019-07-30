import React, { Component } from 'react';

import SelectYear from '../select-year/select-year';
import Circuits from '../circuits/circuits';



export default class App extends Component {



    render() {

        return (
            <div className={"content"}>
                
                <SelectYear />
                
                <Circuits />
                
            </div>
        );
    }
}




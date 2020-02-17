import React, { Component } from 'react';


export default class Carousel extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <div>
                <div className={"carousel"}>
                    <ul>
                        <li><a className={"active"}></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                    </ul>
                </div>
                
                            
            </div>
        );
    }
}




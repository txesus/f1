import React, { Component } from 'react';


export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            circuits: []
        };
    }


    render() {
        const { circuits } = this.props;
        return (
            <div>
                <div className={"carousel"}>
                    <ul>
                        {circuits.map((circuit) => {
                            return (
                                <li ><a>{circuit.circuitName}</a></li>
                                    
                            )
                        })
                        }                          
                    </ul>
                </div>
                
                            
            </div>
        );
    }
}




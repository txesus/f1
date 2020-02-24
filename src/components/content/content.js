import React, { Component } from 'react';


export default class Content extends Component {

    render() {
        const { pilots } = this.props;
        // console.log("S", pilots);

        return (
            <div className={"content"}>
                
                    <ul>
                        {pilots.map((pilot, index) => {
                            return (
                                <li key={index}>
                                    <span >{pilot.position}. </span>                                    
                                    <span >
                                        {pilot.Driver.givenName} {pilot.Driver.familyName}
                                    </span>
                                </li>                                     
                            )
                        })
                        }                          
                    </ul>            
            </div>
        );
    }
}




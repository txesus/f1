import React, { Component } from 'react';


export default class Content extends Component {

    render() {
        const { pilots } = this.props;
        
        return (
            <div className={"content"}>
                <div className={"content-box"}>
                    <ul>
                        {pilots.map((pilot, index) => {
                            console.log("S", pilot);
                            return (
                                <li key={index}>
                                    <span >{pilot.position}. </span>                                    
                                    <span >
                                        {pilot.Driver.givenName} {pilot.Driver.familyName}
                                    </span>

                                    <span > {pilot.Constructor.name}</span>

                                    
                                    {/* { !!pilot.Time ?
                                        <span > Time: {pilot.Time.time}</span>
                                        :
                                        <span > OUT</span>
                                    } */}
                                </li>                                     
                            )
                        })
                        }                          
                    </ul>            
                </div>
            </div>
        );
    }
}




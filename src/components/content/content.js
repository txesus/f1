import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class Content extends Component {

    render() {
        const { pilots, races, qualifyings } = this.props;
        
        return (
            <div className={"content"}>
                <div className={"content-box"}>

                {/* {races.map((race) => {
                    return (
                        <div>
                            <h2>
                                {race.raceName}
                            </h2>
                            <span>{race.Circuit.Location.locality} </span>
                            /
                            <span> {race.Circuit.Location.country}</span>
                        </div>
                  
                    )
                    })
                }                          */}

                    <Tabs>
                        <TabList>
                            <Tab>Race Result</Tab>
                            <Tab>Qualifying Results</Tab>
                        </TabList>

                        <TabPanel>
                            <table className={'results'}>
                                <thead>
                                    <tr>
                                        <th className={'center'}>Pos.</th>
                                        <th>Name</th>
                                        <th>Constructor</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pilots.map((pilot, index) => {
                                        // console.log("S", pilots);
                                        return (
                                            <tr key={index}>
                                                <td className={'center'}>{pilot.position}. </td>                                    
                                                <td>
                                                    <a href={pilot.Driver.url} target={"_blank"}>
                                                        {pilot.Driver.givenName} {pilot.Driver.familyName}
                                                    </a>                                                    
                                                </td>

                                                <td> {pilot.Constructor.name}</td>

                                                <td>
                                                    { !!pilot.Time ?
                                                        <span >{pilot.Time.time}</span>
                                                        :
                                                        ""
                                                    }
                                                </td>                                                
                                            </tr>                                     
                                        )
                                    })
                                    }                          

                                </tbody>
                            </table>

                        </TabPanel>
                        <TabPanel>
                        <table className={'results'}>
                                <thead>
                                    <tr>
                                        <th className={'center'}>Position</th>
                                        <th>Name</th>
                                        <th>Q1</th>
                                        <th>Q2</th>
                                        <th>Q3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {qualifyings.map((qualifying, index) => {
                                        // console.log("S", pilots);
                                        return (
                                            <tr key={index}>
                                                <td className={'center'}>{qualifying.position}. </td>                                    
                                                <td>
                                                    {qualifying.Driver.givenName} {qualifying.Driver.familyName}
                                                </td>

                                                <td> {qualifying.Q1}</td>
                                                <td> {qualifying.Q2}</td>
                                                <td> {qualifying.Q3}</td>

                                                
                                                {/* { !!pilot.Time ?
                                                    <span > Time: {pilot.Time.time}</span>
                                                    :
                                                    <span > OUT</span>
                                                } */}
                                            </tr>                                     
                                        )
                                    })
                                    }                          

                                </tbody>
                            </table>                          
                            
                        </TabPanel>
                    </Tabs>


                </div>
            </div>
        );
    }
}




import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class Content extends Component {

    render() {
        const { pilots, races, qualifyings, mapCenter } = this.props;
        
        return (
            <div className={"content"}>
                <div className={"content-box"}>

                    <div className={"arrows"}>
                        <span>Prev</span>
                        <span>Next</span>
                    </div>                            

                    <div className={"title-content"}>
                        <h2>Nombre de carrera</h2>
                    </div>


                {/* {races.map((race, index) => {
                    return (
                        <div key={index}>
                            <h2>
                                {race.raceName}
                            </h2>
                            <span>{race.Circuit.Location.locality} </span>
                            /
                            <span> {race.Circuit.Location.country}</span>
                            <a href={race.Circuit.url} target={"_blank"}>Wikipedia</a>
                        </div>
                  
                    )
                    })
                }                         
 */}
                    <Tabs>
                        <TabList>
                            <Tab>Race Result</Tab>
                            <Tab>Qualifying Results</Tab>
                            <Tab>Circuit info</Tab>
                        </TabList>

                        <TabPanel>
                            <table className={'results'}>
                                <thead>
                                    <tr>
                                        <th className={'center'}>Pos.</th>
                                        <th>Name</th>
                                        <th>Constructor</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pilots.map((pilot, index) => {                                        
                                        return (
                                            <tr key={index}>
                                                <td className={'center'}>{pilot.position}. </td>                                    
                                                <td>
                                                    <a href={pilot.Driver.url} target={"_blank"}>
                                                        {pilot.Driver.code}
                                                        {/* {pilot.Driver.givenName} {pilot.Driver.familyName} */}
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
                                                <td> {pilot.status}</td>                   
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
                                        <th className={'center'}>Pos.</th>
                                        <th>Name</th>
                                        <th>Q1</th>
                                        <th>Q2</th>
                                        <th>Q3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {qualifyings.map((qualifying, index) => {          
                                        console.log(qualifying)                              
                                        return (
                                            <tr key={index}>
                                                <td className={'center'}>{qualifying.position}. </td>                                    
                                                <td>
                                                    <a href={qualifying.Driver.url} target={"_blank"}>
                                                        {qualifying.Driver.code}
                                                    </a>                                                    
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
                        <TabPanel>
                        <table className={'results'}>
                                <thead>
                                    <tr>
                                        <th>Locality</th>
                                        <th>Country</th>
                                        <th>Date</th>
                                        <th>More info</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {races.map((race, index) => {          
                                        console.log(race)                              
                                        return (
                                            <tr key={index}>
                                                <td>{race.Circuit.Location.locality}</td>
                                                <td>{race.Circuit.Location.country}</td>
                                                <td>{race.date}</td>
                                                <td> 
                                                    <a href={race.Circuit.url} target={"_blank"}>
                                                        Wikipedia
                                                    </a>                                                    
                                                </td>
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




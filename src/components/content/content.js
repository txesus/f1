import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class Content extends Component {

    render() {
        const { pilots, races, qualifyings } = this.props;
        
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
                            <div className={'st_viewport'}>
                                <div className={'st_wrap_table'}>
                                    <header className={'st_table_header'}>
                                        <div className="st_row">
                                            <div className={'st_column'}><span>Pos.</span></div>
                                            <div className={'st_column'}><span>Name</span></div>
                                            <div className={'st_column'}><span>Constructor</span></div>
                                            <div className={'st_column'}><span>Time</span></div>
                                            <div className={'st_column'}><span>Status</span></div>
                                        </div>
                                    </header>
                                    <div className="st_table">
                                        {pilots.map((pilot, index) => {                                        
                                            return (
                                                <div className="st_row" key={index}>
                                                    <div className={'st_column'}><span>{pilot.position}.</span></div>                                    
                                                    <div className={'st_column'}>
                                                        <a href={pilot.Driver.url} target={"_blank"}>
                                                            {pilot.Driver.code}
                                                            {/* {pilot.Driver.givenName} {pilot.Driver.familyName} */}
                                                        </a>                                                    
                                                    </div>

                                                    <div className={'st_column'}><span>{pilot.Constructor.name}</span></div>

                                                    <div className={'st_column'}>
                                                        { !!pilot.Time ?
                                                            <span>{pilot.Time.time}</span>
                                                            :
                                                            ""
                                                        }
                                                    </div>                             
                                                    <div className={'st_column'}><span>{pilot.status}</span></div>                   
                                                </div>                                     
                                            )
                                        })
                                        }       
                                    </div>
                                </div>
                            </div>
                            
                        </TabPanel>
                        <TabPanel>
                            <div className={'st_viewport'}>
                                <div className={'st_wrap_table'}>
                                    <header className={'st_table_header'}>
                                        <div className="st_row">
                                            <div className={'st_column'}><span>Pos.</span></div>
                                            <div className={'st_column'}><span>Name</span></div>
                                            <div className={'st_column'}><span>Q1</span></div>
                                            <div className={'st_column'}><span>Q2</span></div>
                                            <div className={'st_column'}><span>Q3</span></div>
                                        </div>
                                    </header>
                                    <div className="st_table">
                                        {qualifyings.map((qualifying, index) => {                                        
                                            return (
                                                <div className="st_row" key={index}>
                                                    <div className={'st_column'}><span>{qualifying.position}</span></div>                                    
                                                    <div className={'st_column'}>
                                                        <a href={qualifying.Driver.url} target={"_blank"}>
                                                            {qualifying.Driver.code}
                                                        </a>                                                  
                                                    </div>

                                                    <div className={'st_column'}><span>{qualifying.Q1}</span></div>
                                                    <div className={'st_column'}><span>{qualifying.Q2}</span></div>
                                                    <div className={'st_column'}><span>{qualifying.Q3}</span></div>
                                                </div>                                     
                                            )
                                        })
                                        }       
                                    </div>
                                </div>
                            </div>                            
                        </TabPanel>
                        <TabPanel>
                        <div className={'st_viewport'}>
                                <div className={'st_wrap_table'}>
                                    <header className={'st_table_header'}>
                                        <div className="st_row">
                                            <div className={'st_column'}><span>Locality</span></div>
                                            <div className={'st_column'}><span>Country</span></div>
                                            <div className={'st_column'}><span>Date</span></div>
                                            <div className={'st_column'}><span>Hour</span></div>
                                            <div className={'st_column'}><span>More info</span></div>
                                        </div>
                                    </header>
                                    <div className="st_table">
                                        {races.map((race, index) => {        
                                            console.log(races);
                                            return (
                                                <div className="st_row" key={index}>
                                                    <div className={'st_column'}><span>{race.Circuit.Location.locality}</span></div>                                    
                                                    <div className={'st_column'}><span>{race.Circuit.Location.country}</span></div>
                                                    <div className={'st_column'}><span>{race.date}</span></div>
                                                    <div className={'st_column'}><span>{race.time}</span></div>
                                                    <div className={'st_column'}>
                                                        <a href={race.Circuit.url} target={"_blank"}>
                                                            Wikipedia
                                                        </a>
                                                    </div>
                                                </div>                                     
                                            )
                                        })
                                        }       
                                    </div>
                                </div>
                            </div>                                                                             
                        </TabPanel>                        
                    </Tabs>


                </div>
            </div>
        );
    }
}




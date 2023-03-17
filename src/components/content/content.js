import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class Content extends Component {

    constructor(props) {
        super(props);
        this.props.handleResetZoom();
    }


    render() {
        const { pilots, races, qualifyings, round, getCountryFlagFromDemonym, handleResetZoom } = this.props;
        // console.log("RACES", races);
        // console.log("round", round);
        // console.log("pilots", pilots);
        // console.log("qualifyg", qualifyings);


        const selectedRace = () => {
            const raceRound = races.filter((race, index) => {
                return race.round === round;
            });
            return raceRound[0];
        }

        console.log("RACESSSS", races)
        return (
            <div className={round === 0 ? "content" : "content show-content"}>
                <div className={"content-box"}>

                    <div className={"close-content"}>
                        <span onClick={() => handleResetZoom()}>← Back</span>
                    </div>                            

                    <div className={"arrows"}>
                        <span>Prev</span>
                        <span>Next</span>
                    </div>                            

                    <div className={"title-content"}>
                        { selectedRace() &&
                            <h2>{selectedRace().raceName}</h2>
                        }
                    </div>


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
                                            <div className={'st_column'}><span>Points</span></div>
                                        </div>
                                    </header>
                                    <div className="st_table">
                                        {pilots.map((pilot, index) => {                                        
                                            // console.log("FLAGGGG", getCountryFlagFromDemonym(pilot.Driver.nationality))
                                            return (
                                                <div className="st_row" key={index}>
                                                    <div className={'st_column'}><span>{pilot.position}.</span></div>                                    
                                                    <div className={'st_column'}>
                                                        <img src={getCountryFlagFromDemonym(pilot.Driver.nationality)} alt={'country'} />
                                                        <a href={pilot.Driver.url} target={"_blank"} rel="noopener noreferrer">
                                                            {pilot.Driver.familyName}
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
                                                    <div className={'st_column'}><span>{pilot.points}</span></div>
                                                </div>                                     
                                            )
                                        })
                                        }       
                                    </div>
                                </div>
                            </div>
                            
                        </TabPanel>
                            <TabPanel>
                        { qualifyings ?
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
                                                // console.log("QUA", qualifying);
                                                return (
                                                    <div className="st_row" key={index}>
                                                        <div className={'st_column'}><span>{qualifying.position}</span></div>                                    
                                                        <div className={'st_column'}>
                                                        <img src={getCountryFlagFromDemonym(qualifying.Driver.nationality)} alt={'country'} />
                                                            <a href={qualifying.Driver.url} target={"_blank"} rel="noopener noreferrer">
                                                                {qualifying.Driver.familyName}
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
                                :
                                <div>No data results</div>
                        }
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
                                        {
                                            selectedRace() &&
                                            <div className="st_row">
                                                <div className={'st_column'}><span>{selectedRace().Circuit.Location.locality}</span></div>                                    
                                                <div className={'st_column'}><span>{selectedRace().Circuit.Location.country}</span></div>
                                                <div className={'st_column'}><span>{selectedRace().date}</span></div>
                                                <div className={'st_column'}>
                                                        <span>{selectedRace().time ? selectedRace().time : "No data"} </span>
                                                </div>
                                                <div className={'st_column'}>
                                                    <a href={selectedRace().Circuit.url} target={"_blank"} rel="noopener noreferrer">
                                                        Wikipedia
                                                    </a>
                                                </div>
                                            </div>                                     
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




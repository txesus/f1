import React, { Component } from 'react';


export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.handleClickCarousel = this.props.handleClickCarousel.bind(this);
    }
    


    render() {
        const { races, round, setActiveRound } = this.props;
        return (
            <div>
                <div className={"carousel"}>
                    {/* <ul>
                        {races.map((race, index) => {
                            return (
                                <li key={index}>
                                    <span 
                                    className={round === race.round ? "active" : ""}
                                    onClick={(e) => {
                                        this.handleClickCarousel(race.Circuit.Location)
                                        setActiveRound(race.round)
                                    }
                                        }>
                                        {race.round}- {race.raceName}
                                    </span>
                                </li>                                     
                            )
                        })
                        }                          
                    </ul> */}
                    <ol>
                        {races.map((race, index) => {
                            return (
                                <li key={index}>
                                    <p>{race.raceName}</p>
                                    <span 
                                    className={round === race.round ? "details active" : "details"}
                                    onClick={(e) => {
                                        this.handleClickCarousel(race.Circuit.Location)
                                        setActiveRound(race.round)
                                    }
                                        }>
                                        {race.round}- {race.raceName}
                                    </span>
                                </li>                                     
                            )
                        })
                        }                          
                    </ol>                    
                </div>
                
                            
            </div>
        );
    }
}




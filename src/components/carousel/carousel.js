import React, { Component } from 'react';


export default class Carousel extends Component {
    constructor(props){
        super(props)
    }


    render() {
        const { races, round, setActiveRound, getCountryFlagFromName } = this.props;
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
                                    >
                                    {/* <input class='radio' type='radio' checked={round === race.round ? 'checked' : ""}></input> */}
                                    <div class="relative">
                                        {/* <div className={'box-image'}>
                                            <img src={getCountryFlagFromName(race.Circuit.Location.country)} />
                                        </div> */}
                                        <span 
                                            className={round === race.round ? "details active" : "details"}>
                                                {/* {race.round} - {race.raceName} */}
                                                {race.round}
                                            </span>

                                        {/* <span class='circle'></span> */}
                                    </div>

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




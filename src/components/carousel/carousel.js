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
                    <ul id='timeline'>
                        {races.map((race, index) => {
                            return (
                                <li key={index}>
                                    <input class='radio' type='radio' checked={round === race.round ? 'checked' : ""}></input>
                                    <div class="relative">
                                        <span 
                                            className={round === race.round ? "details active" : "details"}
                                            onClick={(e) => {
                                                this.handleClickCarousel(race.Circuit.Location)
                                                setActiveRound(race.round)
                                            }
                                                }>
                                                {race.round} - {race.raceName}
                                            </span>

                                        <span class='circle'></span>
                                    </div>

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




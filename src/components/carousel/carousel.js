import React, { Component } from 'react';


export default class Carousel extends Component {
    constructor(props){
        super(props)
    }


    render() {
        const { races, round, setActiveRound, mapCenter } = this.props;
        return (
            <div>
                <div className={"carousel"}>
                    <ul>
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
                    </ul>
                </div>
                
                            
            </div>
        );
    }
}




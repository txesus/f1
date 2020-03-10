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
                    <ul className={'progress'}>
                        {races.map((race, index) => {
                            return (
                                <li 
                                    key={index} 
                                    className={round === race.round ? "active" : ""}
                                    onClick={(e) => {
                                        this.handleClickCarousel(race.Circuit.Location)
                                        setActiveRound(race.round)
                                        }
                                    }
                                    >
                                    {/* <input class='radio' type='radio' checked={round === race.round ? 'checked' : ""}></input> */}
                                    <div class="relative">
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
                    </ul>                    
                </div>
                
                            
            </div>
        );
    }
}




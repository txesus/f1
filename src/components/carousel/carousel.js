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
                <div className={round === 0 ? "carousel" : "carousel show-content"}>
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
                    </ul>                    
                </div>
                
                            
            </div>
        );
    }
}




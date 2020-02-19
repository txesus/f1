import React, { Component } from 'react';


export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.handleClickCarousel = this.props.handleClickCarousel.bind(this);
    }
    


    render() {
        const { races, active, setActive } = this.props;
            console.log(races);
        return (
            <div>
                <div className={"carousel"}>
                    <ul>
                        {races.map((race, index) => {
                            return (
                                <li key={index}>
                                    <span 
                                    className={active === race.round ? "active" : ""}
                                    onClick={(e) => {
                                        this.handleClickCarousel(race.Circuit.Location)
                                        setActive(race.round)
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




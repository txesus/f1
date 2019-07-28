import React, { Component } from 'react';



export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            yearsCircuits: []
        };
    }

    
    componentWillMount() {
        fetch('http://ergast.com/api/f1/2019.json?limit=100')
          .then((response) => {
            return response.json()
          })
          .then((yearsCircuits) => {
            this.setState({ yearsCircuits: yearsCircuits.MRData.RaceTable.Races})
          })
      }   



    render() {

        const { yearsCircuits } = this.state;

        return (
            <div className={'navigation'}>
                <ul>
                {yearsCircuits.map((yearsCircuits) => {
                    return (
                        <li>
                            <span>{ yearsCircuits.raceName }</span>
                        </li>                        
                    )
                    })
                }

                </ul>
            </div>
        );
    }
}




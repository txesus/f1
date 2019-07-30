import React, { Component } from 'react';



export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            yearsCircuits: []
        };
    }

    
    componentWillMount() {
        fetch('https://ergast.com/api/f1/seasons.json?limit=100')
          .then((response) => {
            return response.json()
          })
          .then((yearsCircuits) => {
            this.setState({ yearsCircuits: yearsCircuits.MRData.SeasonTable.Seasons})
          })
      }   



    render() {

        const { yearsCircuits } = this.state;

        return (
            <div>
                <div className={"select-year"}>
                    <select>
                    {yearsCircuits.map((yearsCircuits) => {
                        return (
                            <option> { yearsCircuits.season } </option>                        
                        )
                        })
                    }

                    </select>
                </div>
            </div>
        );
    }
}




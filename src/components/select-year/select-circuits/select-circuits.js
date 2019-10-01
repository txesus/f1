import React, { Component } from 'react';


export default class SelectCircuits extends Component {

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
                    <select value={this.props.year} onChange={value=> this.props.handleYearChange(value)}>
                    {yearsCircuits.map((yearsCircuits) => {
                        return (
                            <option key={yearsCircuits.season} value={yearsCircuits.season}> { yearsCircuits.season } </option>                        
                        )
                        })
                    }

                    </select>
                </div>
            </div>
        );
    }
}




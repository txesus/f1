import React, { Component } from 'react';

import logo from '../../images/logo-w.png';

export default class SelectYear extends Component {

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
                    <img src={logo} alt="Logo" />
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




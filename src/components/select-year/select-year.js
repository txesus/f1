import React, { Component } from 'react';
import Select from 'react-select';

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
        
        
        
        
        getOptions = () => {
            const options = [...this.state.yearsCircuits].map((field) => {
                return ({
                    value: field.season, 
                    label: field.season
                })
            });
            return options;
        }
        
        
        
        
        render() {
            const options = this.getOptions();
            return (
            <div>
                <div className={"select-year"}>
                    <Select 
                        isSearchable={false}
                        options={options}     
                        onChange={e => {
                            this.props.handleYearChange({target:{value: e.value}});
                            this.props.handleResetZoom();
                        }
                        }      
                    />



                    {/* <select value={this.props.year} onChange={value=> this.props.handleYearChange(value)}>
                    {yearsCircuits.map((yearsCircuits) => {
                        return (
                            <option key={yearsCircuits.season} value={yearsCircuits.season}> { yearsCircuits.season } </option>                        
                        )
                        })
                    }

                    </select> */}
                </div>
            </div>
        );
    }
}




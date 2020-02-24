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
            const sortedYears = yearsCircuits.MRData.SeasonTable.Seasons.reverse();
            this.setState({ yearsCircuits: sortedYears})
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
                {!!options[0] &&
                    <div className={"select-year"}>
                        <Select 
                            options={options}     
                            defaultValue={options[0]}
                            onChange={e => {
                                this.props.handleYearChange({target:{value: e.value}});
                                this.props.handleResetZoom();
                            }
                            }      
                        />
                    </div>

                }
            </div>
        );
    }
}




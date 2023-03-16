import React, { Component } from 'react';




export default class Circuits extends Component {

    render() {

        const { circuitsYears } = this.props;

        return (
            <div>
                <div className={'list-circuits'}>
                    <ul>
                    {circuitsYears.map((circuitsYears) => {
                        return (
                            <li>
                                <a href="#">{ circuitsYears.raceName }</a>
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




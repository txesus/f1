import React, { Component } from 'react';



export default class App extends Component {

    constructor (props){
        super(props)
        this.state = {
            resultados: [],
            isFetch: true
        }
    }
    
    componentDidMount (){
        fetch('https://ergast.com/api/f1/circuits.json?limit=100')
            .then(response => response.json())
            .then(resultadosJson => this.setState({resultados: resultadosJson.MRData.CircuitTable.Circuits, isFetch: false}))
    }
    

    render() {

        const { resultados, isFetch} = this.state

        if(isFetch){
            return 'Loading...'
        }

        return (
            resultados.map((circuito) => 
                <div key={circuito.circuitId}>
                    {circuito.circuitName}
                </div>
            )
        );
    }
}




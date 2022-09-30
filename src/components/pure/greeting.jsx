import React, { Component } from 'react';
import PropTypes from 'prop-types'; {/* Tipo de dato, es importante porque en JS son debilmente tipados y se necesita especificar */}


class Greeting extends Component {
    constructor(props){
        super(props); {/* propiedades  , y abajo estado privado del componente*/}
        this.state={
            age:25
        }
    }

    render() {
        return (
            <div>
               {/* HTML. Sólo regresa un div, no se pueden poner varios div separados */}
                <h1>
                    ¡Hola {/*concatenando JS */ this.props.name}!
                </h1>
                <h2>
                    Tu edad es de: {this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }
    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        ))
    }
}

/*Contenido que le puedo pasar a un componente de un componente de orden superior*/
Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;

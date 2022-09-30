import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';


const GreetingF = (props) => {
    //breve introducción a useState
    //Const [variable, método para actualizarlo] = useState(valor inicial)
    const [age, setage] = useState(29);

    const birthday = () => {
        //actualizamos el state
        setage(age + 1)
    }

    return (
        <div>
            {/* HTML. Sólo regresa un div, no se pueden poner varios div separados */}
            <h1>
                ¡Hola {/*concatenando JS */ props.name} desde componente funcional!
            </h1>
            <h2>
                Tu edad es de: {age}
            </h2> 
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div> 
        </div>
    );
};


GreetingF.propTypes = {

};


export default GreetingF;

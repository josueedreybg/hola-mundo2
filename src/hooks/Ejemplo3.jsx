/**
*Ejemplo Hooks
* -useState()
* -useContext()
*/

import React, {useState, useContext} from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe el padre
 */

//Inicializamos un estado vacío que va a rellenarse con los elementos del padre
const miContexto=React.createContext(null)

const Componente1 = () => {
    const state=useContext(miContexto);

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/*Pintamos el componente 2*/}
            <Componente2></Componente2>

        </div>
    );
}



const Componente2 = () => {
    const state=useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}


export default function MiComponenteConContexto() {
    const estadoInicial={
        token: '1234567',
        sesion: 1
    }

    //Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token: 'ASJDS1234567',
                sesion: sessionData.sesion + 1
            }
        );
    }

  return (
    <miContexto.Provider value={sessionData}>
    {/**Todo lo que está aquí dentro puede leer los datos de sessionSata*/}
    {/*Además, si se actualiza, los componentes de aquí también se actualiza*/}
    <Componente1></Componente1>
    <h1>***** Ejemplo de useState y useContext()*****</h1>
    <button onClick={actualizarSesion}>Actualizar Sesión</button>
    {/*El padre es el provider que pasa los datos y cambia los elem de orden inferior*/}
    </miContexto.Provider>
  )
}






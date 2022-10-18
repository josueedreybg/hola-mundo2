/**
 * Ejemplo del uso del Hook useState
 * Crear un componente de tipo función y acceder a su estado privado a través
 * de un hook y, además, poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {
    //Valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre:'Josué',
        email:'josue@gmail.com'
    }
    //Queremos que el ValorInicial y Persona inicial sean parte del estado del componente para así poder gestionar su cambio y que este se vea reflejado en la vista del componente
    //const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
    const [contador, setContador] = useState(valorInicial);
    const[persona, setPersona] = useState(personaInicial);
    
    //**Función para actualizar el estado privado que tiene el contador */

    function incrementarContador(){
        // ? funcionParacambiar(nuevoValor)
        setContador(contador +1);
    }

     //**Función para actualizar el estado de persona en el componente */
     function actualizarPersona(){
        setPersona(
            {
                nombre:'Marbe bebé',
                email:'marbebb@gmail.com'
            }
        )
     }

    return (
        <div>
            <h1>
                ***Ejemplo de useState***
            </h1>
            <h2> Contador: {contador}</h2>
            <h2> Datos de la persona</h2>
            <h3> Nombre: {persona.nombre}</h3>
            <h3> Email: {persona.email}</h3>
            {/*Bloque de botones para actualizar el estado del componente*/}
            <button onClick={incrementarContador}> Incrementar Contador </button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;

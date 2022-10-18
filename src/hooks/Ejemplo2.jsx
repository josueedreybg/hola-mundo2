/**
 * Ejemplo de uso de:
 * -useState()
 * -useRef(): Para identificar/referenciar elementos dentro de la vista
 * -useEffect() :Para contorolar cambios en la vista. Ciclo de vida de componente
 */

import React, {useState, useRef, useEffect} from 'react';

    const Ejemplo2 = () => {

    //2 contadores distintos
    //c/u en un estado diferente

    const [contador1,setContador1] = useState(0);
    const [contador2,setContador2] = useState(0);

    //vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente  (vista HTML)


    const miRef = useRef();
    function incrementar1(){
        setContador1(contador1+1)
    }

    function incrementar2(){
        setContador2(contador2+1)

    }

    //
     /**
      * Trabajando con useEffect
      * ? Caso 1: Ejecutar SIEMPRE un snippet de código
      * Cada vez que haya un cambio en el estado del componente
      * se ejecuta aquello que esté dentro del useEffect()
      */

        /*useEffect(() => {
            console.log('Cambio en el estado del componente');
            console.log('Mostrando Referencia a element del DOM:');
            console.log(miRef);


        }) */
        /**
         * ? Caso 2: Ejecutar solo cuando cambie contador1
         * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
         * En caso de que cambie contador 2, no habrá ejecución
         * 
         */

        /* useEffect(() => {
            console.log('Cambio en el estado del contador1');
            console.log('Mostrando Referencia a element del DOM:');
            console.log(miRef);
          
         }, [contador1]); */

          /**
         * ? Caso 3: Ejecutar  cuando cambie contador1 O contador 2
         * Cada vez que haya un cambio en contador 1 o 2 , se ejecuta lo que diga el useEffect()
         * En caso de que cambie otro, no se ejecuta
         * 
         */
           useEffect(() => {
            console.log('Cambio en el estado del contador1/contador2');
            console.log('Mostrando Referencia a element del DOM:');
            console.log(miRef);
          
         }, [contador1,contador2]);

    return (
        <div>
            <h1>***Ejemplo de useState(), useRef(), y useEffect</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2 {contador2}</h2>
            {/*Elemento referenciado*/}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            {/*Botones para cambiar contadores*/}
            <div>
                <button onClick={incrementar1}>Incrementar Botón 1</button>
                <button onClick={incrementar2}>Incrementar Botón 2</button>

            </div>
            

        </div>
    );
}

export default Ejemplo2;

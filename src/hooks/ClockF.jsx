//Actividad clock clase->función

import React, {useState,useEffect,useRef} from 'react';

const ClockF = () => {

   const nombre='Josué';
   const apellidos='Barragán'
   const [edad,setEdad] = useState(0);

  const fecha = new Date()


 
   return (
      <div>
         <h2>
            Hora actual:&nbsp;   
            {fecha.toLocaleTimeString()}
         </h2>
         <h3>{nombre} {apellidos}</h3>
         <h1>Edad: {edad}</h1>
      </div>
   );
}


export default ClockF;

const DidMountHook = ()=> {
   useEffect(() => {
      this.timerID = setInterval (
         () => tick(), 1000);
   }, []);

}

const WillUnmountHook = () => {
   useEffect(() => {
       // aquí no ponemos nada
       return () => {
         clearInterval (this.timerID);

       };
   }, []);

}
function tick(){
   this.setState((prevState) => {
      let edad = prevState.edad +1;
      return {
         ...prevState,
         fecha: new Date(),
         edad
      }
   });
}


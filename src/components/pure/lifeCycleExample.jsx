/**
 * Ejemplo de componente de tipo clase que dispone de los métodos del ciclo de vida
 * 
 */

import React, { Component } from 'react';

class LifeCycleExample extends Component {
    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente ')
    }

    componentDidMount(){
        console.log('DIDMOUNT: Justo al acabar el montaje del componente, antes de renderizarlo')
    }

    componentWillReceiveProps(nextProps){
        console.log('WILLRECEIVEPROPS: Si va a recibir nuevos props')
    }

    shouldComponentUpdate(nextProps, nextState){
        //sirve para controlar si el componente debe o no actualizarse. return TRUE OR FALSE
    }
    
    componentWillUpdate(prevProps, prevState){
        console.log('COMPONENTWILLUPDATE: JUSTO ANTES DE ACTUALIZARSE')
    }
    
    componentDidUpdate(){
        console.log('componentdidUpdate: Justo después de actualizarse')
    }

    componentWillUnmount(){
        console.log('ComponentWillUnmount: Justo antes de desaparecer')
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleExample;

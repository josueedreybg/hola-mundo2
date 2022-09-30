import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactoComponent = ({contacto}) => {
    return (
        <div>
            <br></br>
            <h2>Nombre: {contacto.nombre}</h2>
            <h2>Apellido: {contacto.apellido}</h2>
            <h2>Email: {contacto.email}</h2>
            <h2><i>El contacto está: <b>{contacto.conectado ? 'Contacto en Línea' : 'Contacto desconectado'}</b></i></h2>
        </div>
    );
};

ContactoComponent.propTypes = {
    contacto : PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;

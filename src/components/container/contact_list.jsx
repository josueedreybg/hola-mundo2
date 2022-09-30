import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';


const ContactListComponent = () => {

    const defaultContact= new Contacto('Josué Edrey', 'Barragán Guerrero' , 'josueedreybg@gmail.com', true);
    return (
        <div>
            <div>
                Your contacts:
            </div>
            <ContactoComponent contacto={defaultContact}></ContactoComponent>

        </div>
    );
}

export default ContactListComponent;

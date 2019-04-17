import React, { Component } from 'react';
import './TransparentMenu.scss';

export default class TransparentMenu extends Component {
    render() {
        return (
            <div className="transparent-container">
                <a href="http://www.google.com/maps/place/40.434551,-3.700519" target="_blank" className="contacto-box mail">
                    <img src="./images/direccion.png" alt="ico-direccion" />
                    <p>C/ Eloy Gonzalo 27<br />28010, Madrid</p>
                </a>
                <a href="mailto:hola@tacubayaconsulting.com?Subject=Buenos%20días%20..." target="_top" className="contacto-box mail">
                    <img src="./images/avion.png" alt="ico-avion" />
                    <p>Envianos<br />un e-mail</p>
                </a>
                <a href="tel:+34652487501" className="contacto-box mail">
                    <img src="./images/telefono.png" alt="ico-telefono" />
                    <p>Llámanos<br />+34 652 487 501</p>

                </a>
            </div>
        )
    }
}

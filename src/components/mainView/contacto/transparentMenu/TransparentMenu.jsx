import React, { Component } from 'react';
import './TransparentMenu.scss';

export default class TransparentMenu extends Component {
    render() {
        return (
            <div className="transparent-container">
                <div className="contacto-box">
                    <img src="./images/direccion.png" alt="ico-direccion" />
                    <p>C/ Eloy Gonzalo 27<br />28010, Madrid</p>
                </div>
                <a href="mailto:hola@tacubayaconsulting.com?Subject=Buenos%20días" target="_top" className="contacto-box mail">
                    <img src="./images/avion.png" alt="ico-avion" />
                    <p>Envianos<br />un e-mail</p>
                </a>
                <div className="contacto-box">
                    <img src="./images/telefono.png" alt="ico-telefono" />
                    <p>Llámanos<br />+34 651 501 191</p>

                </div>
            </div>
        )
    }
}

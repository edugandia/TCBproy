import React, { Component } from 'react';
import './Contacto.scss';

export default class Contacto extends Component {
  render() {
    return (
      <div id="contacto-general-container">
        <div className="wave-container">
          <img src="./images/thumbnail_verde.png" alt="onda-verde" />
        </div>
        <div className="content-container">
          <div className="title green"><h1>contacto</h1></div>
          <div className="text">
            <p>Lorem ipsum dolorsitamet,consect etueradip iscingelit,seddiam nonummyn  ibheuismodtin ciduntutlaoreetd oloremagnaa  liquam eratvolutpat.Utwisienim adminim eniam,quisnostrud exercitation.</p>
          </div>
        </div>
        <div className="image-container image-container-contacto">
          <div className="low-opacity-box">
            <div className="contacto-box">
              <img src="./images/direccion.png" alt="ico-direccion" />
              <p>C/ Eloy Gonzalo 27<br/>28010, Madrid</p>
            </div>
            <a href="mailto:hola@tacubayaconsulting.com?Subject=Buenos%20días" target="_top"className="contacto-box mail">
              <img src="./images/avion.png" alt="ico-avion" />
              <p>Envianos<br/>un e-mail</p>
            </a>
            <div className="contacto-box">
              <img src="./images/telefono.png" alt="ico-telefono" />
              <p>Llámanos<br/>+34 651 501 191</p>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
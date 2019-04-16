import React, { Component } from 'react';
import './Contacto.scss';
import TransparentMenu from './transparentMenu';

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
            <TransparentMenu />
          </div>
        </div>
        <div className="contact-icons-mobile">
          <TransparentMenu />
        </div>
      </div>
    )
  }
}
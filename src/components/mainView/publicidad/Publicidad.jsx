import React, { Component } from 'react';
import './Publicidad.scss';
import Carousel from './carousel';

export default class Publicidad extends Component {
  render() {
    return (
      <div id="publicidad-general-container">
        <div className="wave-container">
          <img src="./images/thumbnail_amarillo.png" alt="onda-azul" />
        </div>
        <div className="content-container">
          <div className="title yellow"><h1>publicicdad</h1></div>
          <div className="text">
            <p>Lorem ipsum dolorsitamet,consect etueradip iscingelit,seddiam nonummyn  ibheuismodtin ciduntutlaoreetd oloremagnaa  liquam eratvolutpat.Utwisienim adminim eniam,quisnostrud exercitation.</p>
          </div>
          <div id="video-container">
            <iframe className="video" frameBorder="0" src="https://www.youtube.com/embed/90ZVG0xMlVI">
            </iframe>
          </div>
          <div className="carousel-6">
            <Carousel proyectIdPicker={this.props.proyectIdPicker} numberOfBoxes={6} />
          </div>
          <div className="carousel-2">
            <Carousel proyectIdPicker={this.props.proyectIdPicker} numberOfBoxes={2} />
          </div>
        </div>
      </div>
    )
  }
}

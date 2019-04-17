import React, { Component } from 'react';
import './Publicidad.scss';
import Carousel from './carousel';

export default class Publicidad extends Component {
  render() {
    return (
      <div id="publicidad-general-container">
        <div className="wave-container">
          <img src="./images/Wave_cyan_v01.gif" alt="onda-azul" />
        </div>
        <div className="content-container">
          <div className="title yellow"><h1>publicidad</h1></div>
          <div className="text">
            <p>Lorem ipsum dolorsitamet,consect etueradip iscingelit,seddiam nonummyn  ibheuismodtin ciduntutlaoreetd oloremagnaa  liquam eratvolutpat.Utwisienim adminim eniam,quisnostrud exercitation.</p>
          </div>
        </div>
        <div className="image-container-m image-container-publicidad"></div>
        <div className="carousel-6">
          <Carousel proyectIdPicker={this.props.proyectIdPicker} numberOfBoxes={6} />
        </div>
        <div className="carousel-2">
          <Carousel proyectIdPicker={this.props.proyectIdPicker} numberOfBoxes={2} />
        </div>
      </div>
    )
  }
}

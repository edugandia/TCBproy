import React, { Component } from 'react';
import './TransformacionDigital.scss';

export default class TransformacionDigital extends Component {
  render() {
    return (
      <div id="transformacion-general-container">
        <div className="wave-container">
          <img src="./images/Wave_blue_v01.gif" alt="onda-azul" />
        </div>
        <div className="content-container">
          <div className="title blue"><h1>transformación digital</h1></div>
          <div className="text">
            <p>Lorem ipsum dolorsitamet,consect etueradip iscingelit,seddiam nonummyn  ibheuismodtin ciduntutlaoreetd oloremagnaa  liquam eratvolutpat.Utwisienim adminim eniam,quisnostrud exercitation.</p>
          </div>
        </div>
        <div className="image-container-m image-container-transformacion">
        </div>
      </div>
    )
  }
}

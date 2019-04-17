import React, { Component } from 'react';
import './TransformacionDigital.scss';

export default class TransformacionDigital extends Component {
  render() {
    return (
      <div id="transformacion-general-container">
        <div className="wave-container">
          <img src="./images/thumbnail_azul.png" alt="onda-azul" />
        </div>
        <div className="content-container">
          <div className="title blue"><h1>transformación digital</h1></div>
          <div className="text">
            <p>Lorem ipsum dolorsitamet,consect etueradip iscingelit,seddiam nonummyn  ibheuismodtin ciduntutlaoreetd oloremagnaa  liquam eratvolutpat.Utwisienim adminim eniam,quisnostrud exercitation.</p>
          </div>
        </div>
        <div className="image-container-m image-container-transformacion">
          {/* <div className="low-opacity-box">
            <div className="brands-conatainer">
              <div className="transformacion-box">
                <img src="./images/carrefour.png" alt="carrefour-ico" />
                <img src="./images/marben.png" alt="marben-ico" />
                <img src="./images/pernod.png" alt="pernod-ico" />
              </div>
              <div className="transformacion-box">
                <img src="./images/santander.png" alt="santander-ico" />
                <img src="./images/caser.png" alt="caser-ico" />
                <img src="./images/bear.png" alt="bear-ico" />
                <img src="./images/loreal.png" alt="loreal-ico" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

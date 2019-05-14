import React, { Component } from "react";
import "./Contacto.scss";
import TransparentMenu from "./transparentMenu";
import WorkWithUs from "./workWithUs";

export default class Contacto extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false
    };
  }

  isModalOpenHandler = () => {
    this.setState({ ...this.state, isModalOpen: !this.state.isModalOpen });
  };

  render() {
    return (
      <div id="contacto-general-container">
        <div className="wave-container">
          <img src="./images/Wave_green_v01.gif" alt="onda-verde" />
        </div>
        <div className="content-container">
          <div className="title green">
            <h1>contacto</h1>
          </div>
          <div className="text">
            <p>
              Pues aquí estamos... en el final de la web, bueno, en realidad no
              es el final del todo, podrías leerte nuestras bases legales, pero
              (spoiler alert) son bastante aburridas.
              <br />
              <br />
              Así que si quieres, es el momento de ponernos en contacto. Nos
              puedes mandar un mail, venir a vernos o llamarnos. De momento no
              se nos ocurren más maneras de contactar, pero si se te ocurren a
              ti, puedes decírnoslo por mail, en nuestras oficinas o por
              teléfono.
            </p>
          </div>
        </div>
        <div className="image-container-m image-container-contacto" />
        <TransparentMenu isModalOpenHandler={this.isModalOpenHandler} />
        <WorkWithUs />
      </div>
    );
  }
}

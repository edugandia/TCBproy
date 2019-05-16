import React, { Component } from "react";
import "./Contacto.scss";
import TransparentMenu from "./transparentMenu";
import ContactModal from "./contactModal";
import WorkWithUsModal from "./workWithUsModal/WorkWithUsModal";

export default class Contacto extends Component {
  constructor() {
    super();
    this.state = {
      isWorkWithUsModalOpen: false,
      isContactUsModalOpen: false
    };
  }

  workWithUsModaltToggle = () => {
    this.setState({
      ...this.state,
      isWorkWithUsModalOpen: !this.state.isWorkWithUsModalOpen
    });
  };

  contactUsModaltToggle = () => {
    this.setState({
      ...this.state,
      isContactUsModalOpen: !this.state.isContactUsModalOpen
    });
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
        <TransparentMenu
          workWithUsModaltToggle={this.workWithUsModaltToggle}
          contactUsModaltToggle={this.contactUsModaltToggle}
        />
        <ContactModal
          isContactUsModalOpen={this.state.isContactUsModalOpen}
          contactUsModaltToggle={this.contactUsModaltToggle}
        />
        <WorkWithUsModal
          isWorkWithUsModalOpen={this.state.isWorkWithUsModalOpen}
          workWithUsModaltToggle={this.workWithUsModaltToggle}
        />
      </div>
    );
  }
}

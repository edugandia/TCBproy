import React, { Component } from "react";
import "./Publicidad.scss";
import Carousel from "./carousel";

export default class Publicidad extends Component {
  render() {
    return (
      <div id="publicidad-general-container">
        <div className="wave-container">
          <img src="./images/Wave_yellow_v01.gif" alt="onda-azul" />
        </div>
        <div className="content-container">
          <div className="title yellow">
            <h1>publicidad</h1>
          </div>
          <div className="text">
            <p>
              Llevamos más de 15 años terriblemente enamorados de la
              comunicación, creemos ciegamente que una idea es capaz de
              conseguir todo lo que se propone. Nuestra misión es que las ideas
              generen emociones, solo así conseguiremos que cumplan con los
              objetivos marcados por nuestros clientes y que se conviertan en
              ideas eficaces.<br/><br/>Aquí podrás ver algunos de los trabajos que hemos
              hecho desde Marzo de 2019 en esta nueva aventura llamada Tacubaya
              Consulting.
            </p>
          </div>
        </div>
        <div className="image-container-m image-container-publicidad" />
        <div className="carousel-6">
          <Carousel
            proyectIdPicker={this.props.proyectIdPicker}
            numberOfBoxes={6}
          />
        </div>
        <div className="carousel-2">
          <Carousel
            proyectIdPicker={this.props.proyectIdPicker}
            numberOfBoxes={2}
          />
        </div>
      </div>
    );
  }
}

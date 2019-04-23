import React, { Component } from "react";
import "./TransformacionDigital.scss";

export default class TransformacionDigital extends Component {
  render() {
    return (
      <div id="transformacion-general-container">
        <div className="wave-container">
          <img src="./images/Wave_blue_v01.gif" alt="onda-azul" />
        </div>
        <div className="content-container">
          <div className="title blue">
            <h1>transformación digital</h1>
          </div>
          <div className="text">
            <p>
              En Tacubaya Consulting tenemos un departamento ampliamente
              especializado en realizar el paso hacia la adopción de procesos
              automatizados o maquinaria inteligente con el objetivo de
              optimizar el rendimiento, la productividad y cualquiera de los
              procesos de una empresa. Desde las ventas, al procurement o
              cualquiera de los procesos de los distintos departamentos.<br/><br/>Para
              que dicha transformación sea efectiva, es básico que apliquemos
              nuevas tecnologías en la filosofía, la cultura y la mentalidad de
              la compañía. Solo así, se crea un espacio digital en el que se
              desarrollan las relaciones con los clientes actuales, los clientes
              potenciales, los empleados, los proveedores y el entorno.<br/><br/>No
              estamos en una época de cambios, sino en un cambio de época.
              Aquellos que no sean capaces de reinterpretar este nuevo
              ecosistema digital, se encontrarán en una desventaja competitiva
              creciente.
            </p>
          </div>
        </div>
        <div className="image-container-m image-container-transformacion" />
      </div>
    );
  }
}

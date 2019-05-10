import React, { Component } from "react";
import "./WorkWithUs.scss";

export default class WorkWithUs extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("http://tacubayaconsulting.com/contacto/", {
      method: "POST",
      body: data
    }).then(response => {
      console.log(response);
    });
  }
  render() {
    return (
      <div className="work-with-us-container">
        <h3 className="green">
          Contacta con nosotros, te responderemos en un abrir y cerrar de ojos.
        </h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <input
              className="input-half green-form"
              type="text"
              placeholder="Nombre"
              name="nombre"
            />
            <input
              className="input-half green-form"
              type="text"
              placeholder="Apellidos"
              name="apellidos"
            />
          </div>
          <div className="form-row">
            <input
              className="input-half  green-form"
              type="text"
              placeholder="Teléfono"
              name="telefono"
            />
            <input
              className="input-half  green-form"
              type="text"
              placeholder="e-mail"
              name="correo"
            />
          </div>
          <div className="form-row">
            <select className="green-form input-entry" name="categoria">
              <option value="">Selecciona tu sector</option>
              <option value="Publicidad">Publicidad</option>
              <option value="Transformación Digital">
                Transformación Digital
              </option>
            </select>
          </div>
          <div className="form-row ">
            <input
              className="input-entry green-form text-area"
              type="text-area"
              placeholder="Mensaje"
              name="comentario"
            />
          </div>
          <div className="form-row">
            <input
              className="input-half  green-form"
              type="file"
              name="cvfile"
            />
            <button className="input-half green-form">Enviar</button>
          </div>
        </form>
      </div>
    );
  }
}

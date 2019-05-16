import React, { Component } from "react";
import "./WorkWithUs.scss";
import { Link } from "react-router-dom";

export default class WorkWithUs extends Component {
  constructor() {
    super();
    this.state = {
      nombre: false,
      apellidos: false,
      correo: false,
      categoria: false,
      cvfile: false,
      isChecked: false,
      fileName: "",
      showOkMessage: false,
      showFailureMessage: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    fetch("http://tacubayaconsulting.com/contacto/", {
      method: "POST",
      body: data
    }).then(response => {
      if (response.status === 200) {
        this.setState({ ...this.state, showOkMessage: true });
      } else {
        this.setState({ ...this.state, showFailureMessage: true });
      }
    });
  };

  nameValidator = event => {
    const nombre = event.target.value;
    if (nombre.length > 0) {
      this.setState({ ...this.state, nombre: true });
    } else {
      this.setState({ ...this.state, nombre: false });
    }
  };

  surnameValidator = event => {
    const apellidos = event.target.value;
    if (apellidos.length > 0) {
      this.setState({ ...this.state, apellidos: true });
    } else {
      this.setState({ ...this.state, apellidos: false });
    }
  };

  emailValidator = event => {
    const correo = event.target.value;
    if (correo.length > 0 && this.emailStringValidator(correo)) {
      this.setState({ ...this.state, correo: true });
    } else {
      this.setState({ ...this.state, correo: false });
    }
  };

  emailStringValidator = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  typeValidate = event => {
    const categoria = event.target.value;
    if (categoria === "Publicidad" || categoria === "Transformación Digital") {
      this.setState({ ...this.state, categoria: true });
    } else {
      this.setState({ ...this.state, categoria: false });
    }
  };

  fileValidator = event => {
    const file = event.target.value;
    if (file.length > 0) {
      this.setState({ ...this.state, cvfile: true, fileName: file });
    } else {
      this.setState({ ...this.state, cvfile: false, fileName: "" });
    }
  };

  checkValidator = () => {
    this.setState({ ...this.state, isChecked: !this.state.isChecked });
  };

  render() {
    let activeBtn = false;
    if (
      this.state.nombre &&
      this.state.apellidos &&
      this.state.correo &&
      this.state.categoria &&
      this.state.cvfile &&
      this.state.isChecked
    ) {
      activeBtn = true;
    }

    return (
      <div className="work-with-us-container">
        <h2 className="green">¿Quieres trabajar con nosotros?</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <input
              className="input-half green-form"
              type="text"
              placeholder="Nombre *"
              name="nombre"
              onChange={this.nameValidator}
              required
            />
            <input
              className="input-half green-form"
              type="text"
              placeholder="Apellidos *"
              name="apellidos"
              onChange={this.surnameValidator}
              required
            />
          </div>
          <div className="form-row">
            <input
              className="input-half green-form"
              type="text"
              placeholder="Teléfono"
              name="telefono"
            />
            <input
              className="input-half green-form"
              type="text"
              placeholder="E-mail*"
              name="correo"
              onChange={this.emailValidator}
              required
            />
          </div>
          <div className="form-row">
            <select
              required
              className="green-form input-entry"
              name="categoria"
              onChange={this.typeValidate}
            >
              <option value="">Selecciona tu sector *</option>
              <option value="Publicidad">Publicidad</option>
              <option value="Transformación Digital">
                Transformación Digital
              </option>
            </select>
          </div>
          <div className="form-row ">
            <input
              className="input-entry green-form text-area"
              type="textarea"
              placeholder="Mensaje"
              name="comentario"
            />
          </div>
          <div className="form-row">
            <label
              className="green-form input-half label-upload"
              htmlFor="input-file"
            >
              Adjuntar CV *<b>{this.state.fileName}</b>
            </label>
            <input
              id="input-file"
              className="input-half green-form"
              type="file"
              name="cvfile"
              onChange={this.fileValidator}
              accept="application/msword, application/pdf"
              required
            />
            <button
              disabled={!activeBtn}
              className={`input-half green-form ${
                activeBtn ? "act-btn" : "btn"
              }`}
            >
              Enviar
            </button>
          </div>
          <div className="form-row">
            <p className="green">(*) Campos obligatorios.</p>
          </div>
          <div className="form-row">
            <div className="check-container">
              <input
                type="checkbox"
                id="checkLPD"
                onChange={this.checkValidator}
              />
              <label htmlFor="checkLPD">
                Para continuar tienes que aceptar la{" "}
                <Link to="/aviso-legal">ley de protección de datos.</Link>
              </label>
            </div>
          </div>
          {this.state.showOkMessage && (
            <div className="form-row ok-message">
              <p>Tu mensaje ha sido enviado correctamente</p>
            </div>
          )}
          {this.state.showFailureMessage && (
            <div className="form-row fail-message">
              <p>Tu mensaje ha sido enviado correctamente</p>
            </div>
          )}
        </form>
        <div onClick={this.props.workWithUsModaltToggle} className="close-modal">
          <p>Cerrar (X)</p>
        </div>
      </div>
    );
  }
}

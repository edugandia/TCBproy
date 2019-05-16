import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ContactForm.scss";

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      nombre: false,
      apellidos: false,
      correo: false,
      servicio: false,
      isChecked: false,
      showOkMessage: false,
      showFailureMessage: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    fetch("http://tacubayaconsulting.com/contacto/servicio.php", {
      method: "POST",
      body: data
    }).then(response => {
      console.log(response);
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
    const servicio = event.target.value;
    if (
      servicio === "Publicidad" ||
      servicio === "Transformación digital"
    ) {
      this.setState({ ...this.state, servicio: true });
    } else {
      this.setState({ ...this.state, servicio: false });
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
      this.state.servicio &&
      this.state.isChecked
    ) {
      activeBtn = true;
    }
    return (
      <div className="contact-form-container">
        <h2 className="green">Contacta con nosotros</h2>
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
              name="servicio"
              onChange={this.typeValidate}
            >
              <option value="">¿Que servicio te interesa? *</option>
              <option value="Publicidad">Publicidad</option>
              <option value="Transformación digital">
                Transformación digital
              </option>
            </select>
          </div>
          <div className="form-row">
            <input
              className="input-entry green-form text-area"
              type="textarea"
              placeholder="Mensaje"
              name="comentario"
            />
          </div>
          <div className="form-row">
            <button
              disabled={!activeBtn}
              className={`input-entry green-form ${
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
        <div onClick={this.props.contactUsModaltToggle} className="close-modal">
          <p>Cerrar (X)</p>
        </div>
      </div>
    );
  }
}

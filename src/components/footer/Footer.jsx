import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-general-container">
        <h6>© 2018 Tacubaya Consulting S.L.</h6>
        <h5>
          <Link to="aviso-legal">AVISO LEGAL Y POLÍTICA DE PRIVACIDAD</Link>
        </h5>
      </div>
    )
  }
}

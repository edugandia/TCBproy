import React, { Component } from 'react';
import './PoliticaCookies.scss';

export default class PoliticaCookies extends Component {
constructor(){
  super();
  this.state={
    closeBanner: false
  }
}
  closeBanner = () => {
    this.state({ ...this.state, closeBanner: true })
  }

  render() {
    return (
      <div className="cookies-banner">
        <button onClick={this.closeBanner}>Aceptar</button>
      </div>
    )
  }
}

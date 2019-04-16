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
    this.setState({ ...this.state, closeBanner: true })
  }

  render() {
    return (
      <div className={this.state.closeBanner && "desapear"} className="cookies-banner">
        <button onClick={this.closeBanner} >Aceptar</button>
      </div>
    )
  }
}

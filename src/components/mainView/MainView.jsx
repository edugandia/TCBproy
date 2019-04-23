import React, { Component } from "react";
import utils from "../../utils/utils";
import StickyLogo from "./stickyLogo";
import Menu from "./menu";
import Manifiesto from "./manifiesto";
import Publicidad from "./publicidad";
import TransformacionDigital from "./transformacionDigital";
import Contacto from "./contacto";

export default class MainView extends Component {
  constructor() {
    super();
    this.state = {
      sectionHover: "tacubaya"
    };
  }

  menuLogoToggle = section => {
    this.setState({ ...this.state, sectionHover: section });
  };

  componentDidMount() {
    this.props.anchorId === "top" &&
      utils.goToId("separator-container");
      this.props.anchorId === "publicidad" &&
      utils.goToId("publicidad-general-container");
  }

  render() {
    return (
      <div>
        <div id="separator-container" />
        <StickyLogo sectionHover={this.state.sectionHover} />
        <Menu menuLogoToggle={this.menuLogoToggle} />
        <Manifiesto />
        <Publicidad proyectIdPicker={this.props.proyectIdPicker} />
        <TransformacionDigital />
        <Contacto />
      </div>
    );
  }
}

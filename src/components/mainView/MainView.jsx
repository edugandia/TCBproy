import React, { Component } from "react";
import utils from "../../utils/utils";
import StickyLogo from "./stickyLogo";
import Menu from "./menu";
import Manifiesto from "./manifiesto";
import Publicidad from "./publicidad";
import TransformacionDigital from "./transformacionDigital";
import Contacto from "./contacto";
import Footer from "./footer";

export default class MainView extends Component {
  constructor() {
    super();
    this.state = {
      sectionHover: "tacubaya",
      showPage: false
    };
  }

  showPageActivator = () => {
    console.log("pasa");
    this.setState({ ...this.state, showPage: true });
  };

  menuLogoToggle = section => {
    this.setState({ ...this.state, sectionHover: section });
  };

  componentDidMount() {
    this.props.anchorId === "top" && utils.goToId("separator-container");
    this.props.anchorId === "publicidad" &&
      utils.goToId("publicidad-general-container");
  }

  render() {
    return (
      <div>
        <div id="separator-container" />
        <StickyLogo sectionHover={this.state.sectionHover} />
        <Menu
          menuLogoToggle={this.menuLogoToggle}
          showPageActivator={this.showPageActivator}
        />
        {this.state.showPage && (
          <div>
            {" "}
            <Manifiesto />
            <Publicidad proyectIdPicker={this.props.proyectIdPicker} />
            <TransformacionDigital />
            <Contacto />
            <Footer />{" "}
          </div>
        )}
      </div>
    );
  }
}

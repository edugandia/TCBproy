import React, { Component } from "react";
import "./Menu.scss";

import utils from "../../../utils/utils";

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      isReallyOpen: false
    };
  }

  openWavesMenu = () => {
    this.setState({ ...this.state, isOpen: true }, () => {
      this.props.showPageActivator();
      setTimeout(() => {
        this.state.isOpen &&
          this.setState({ ...this.setState, isReallyOpen: true });
      }, 2000);
    });
  };

  closeWavesMenu = () => {
    this.setState({ ...this.state, isOpen: false, isReallyOpen: false });
  };

  render() {
    return (
      <div id="menu-general-container">
        <div
          className={`${
            this.state.isOpen ? "waves-container-open" : "waves-container-close"
          } waves-container`}
          onMouseLeave={() => {
            this.closeWavesMenu();
            this.props.menuLogoToggle("tacubaya");
          }}
        >
          <div
            className="wave1 wave"
            onMouseEnter={() => {
              this.openWavesMenu();
              this.props.menuLogoToggle("manifiesto");
            }}
            onClick={() => {
              utils.scrollToId("manifiesto-general-container");
              this.closeWavesMenu();
            }}
          >
            {this.state.isOpen && (
              <h3 className="slide-in-right title-menu title-menu-r pink">
                manifiesto
              </h3>
            )}
            <img src="./images/Wave_pink_v01.gif" alt="line" />
          </div>

          <div
            className="wave2 wave"
            onMouseEnter={() => {
              this.openWavesMenu();
              this.props.menuLogoToggle("publicidad");
            }}
            onClick={() => {
              utils.scrollToId("publicidad-general-container");
              this.closeWavesMenu();
            }}
          >
            {this.state.isOpen && (
              <h3 className="slide-in-left title-menu title-menu-i yellow">
                publicidad
              </h3>
            )}
            <img src="./images/Wave_yellow_v01.gif" alt="line" />
          </div>

          <div
            className="wave3 wave"
            onMouseEnter={() => {
              this.openWavesMenu();
              this.props.menuLogoToggle("transformacion");
            }}
            onClick={() => {
              utils.scrollToId("transformacion-general-container");
              this.closeWavesMenu();
            }}
          >
            {this.state.isOpen && (
              <h3 className="slide-in-right title-menu title-menu-r blue">
                transformación
                <br />
                digital
              </h3>
            )}
            <img src="./images/Wave_blue_v01.gif" alt="line" />
          </div>

          <div
            className="wave4 wave"
            onMouseEnter={() => {
              this.openWavesMenu();
              this.props.menuLogoToggle("contacto");
            }}
            onClick={
              this.state.isReallyOpen
                ? () => {
                    utils.scrollToId("contacto-general-container");
                    this.closeWavesMenu();
                  }
                : this.openWavesMenu
            }
          >
            {this.state.isOpen && (
              <h3 className="slide-in-left title-menu title-menu-i green">
                contacto
              </h3>
            )}
            <img src="./images/Wave_green_v01.gif" alt="line" />
          </div>
        </div>
      </div>
    );
  }
}

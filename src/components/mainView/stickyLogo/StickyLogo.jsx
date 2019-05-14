import React, { Component } from "react";
import "./StickyLogo.scss";
import utils from "../../../utils/utils";

export default class StickyLogo extends Component {
  constructor() {
    super();
    this.state = {
      isMobile: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.isOnTopDetector);
    this.mobileDeviceDetector();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.isOnTopDetector);
  }

  isOnTopDetector = () => {
    const currentScroll = window.scrollY;
    if (currentScroll < 50) {
      this.setState({ ...this.state, isOnTop: "active" });
    } else {
      this.setState({ ...this.state, isOnTop: "unactive" });
    }
  };

  mobileDeviceDetector = () => {
    window.innerWidth < 1025 &&
      this.setState({ ...this.state, isMobile: true });
  };

  render() {
    return (
      <div className="logo-bar">
        <img
          className={`sticky-logo-ontop ${this.state.isOnTop === "unactive" &&
            "sticky-logo"}`}
          onClick={() => utils.scrollToId("separator-container")}
          src={`./images/Tacubaya_${
            this.state.isMobile ? "tacubaya_mob" : this.props.sectionHover
          }.png`}
          alt="logo"
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./WorkWithUsModal.scss";
import WorkWithUs from "./workWithUs";

export default class WorkWithUsModal extends Component {
  render() {
    return (
      <div
        className={`modal-form-container fade-in ${this.props.isWorkWithUsModalOpen &&
          "show-modal"}`}
      >
        <WorkWithUs
          workWithUsModaltToggle={this.props.workWithUsModaltToggle}
        />
      </div>
    );
  }
}

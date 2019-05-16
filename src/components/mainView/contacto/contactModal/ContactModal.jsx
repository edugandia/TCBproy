import React, { Component } from "react";
import "./ContactModal.scss";
import ContactForm from "./contactForm";

export default class ContactModal extends Component {
  render() {
    return (
      <div
        className={`modal-form-container ${this.props.isContactUsModalOpen &&
          "show-modal"}`}
      >
        <ContactForm contactUsModaltToggle={this.props.contactUsModaltToggle} />
      </div>
    );
  }
}

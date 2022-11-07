import "./Contact.css";
import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="form-section">
        <div className="name question">
          <h6>Name</h6>
          <textarea id="description" rows="1" cols="50"></textarea>
        </div>
        <div className="email question">
          <h6>Email</h6>
          <textarea id="description" rows="1" cols="50"></textarea>
        </div>
        <div className="message question">
          <h6>Message</h6>
          <textarea id="description" rows="1" cols="50"></textarea>
        </div>
        <button>Submit</button>
      </section>
    </div>
  );
};

export default Contact;

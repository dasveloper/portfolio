import React from "react";
import ContactForm from "../components/ContactForm";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container ">
      <div className="contact-card-wrapper">
        <div className="contact-card-left">
          <div className="contact-card-inner">
            <p className="contact-header">
              <span className="hello">Hello!</span> This is how you reach me.
              Feel free to shoot me an email or submit a message via the contact
              form I respond to both quickly. Reach out to talk jobs, request
              Git repo access, ask questions, or just chat about projects.
            </p>
            <div className="email-wrapper">
              <label className="email-label">Primary email:</label>
              <a className="email" href="mailto:me@justinharr.com">
                me@justinharr.com
              </a>
            </div>
            <div className="social-icons-wrapper">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/dasveloper"
                className="social-link"
              >
                <FaGithub className="social-icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/justin-harr-85370a148"
                className="social-link"
            >
                <FaLinkedinIn className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-card-right">
          <div className="contact-card-inner">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

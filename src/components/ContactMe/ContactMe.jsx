import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <>
      <section className="contact-container">
        <div className="contact-heading">
          <div className="contact-line-before"></div>
          <h5>Contact Me</h5>
        </div>

        <div className="contact-content">
          <div style={{ flex: 1 }}>
            <ContactInfoCard
              iconOne="./assets/images/call.svg"
              urlOne="tel:+917870465866"
              textOne="Call Me"
              iconTwo="./assets/images/gmail.svg"
              urlTwo="mailto:chandan2606kr@gmail.com"
              textTwo="Send Mail"
            />
            <ContactInfoCard
              iconOne="./assets/images/github.svg"
              urlOne="https://github.com/ChandanKr"
              textOne="GitHub Profile"
              iconTwo="./assets/images/linkedin.svg"
              urlTwo="https://www.linkedin.com/in/chandan2606/"
              textTwo="LinkedIn Profile"
            />
          </div>
          <div style={{ flex: 1 }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;

import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({
  iconOne,
  urlOne,
  textOne,
  iconTwo,
  urlTwo,
  textTwo,
}) => {
  return (
    <>
      <div className="contact-details-card">
        <div className="contact-inner-details">
          <div className="icon">
            <img src={iconOne} alt="" />
          </div>
          <p>
            <a href={urlOne} target="_chandan">{textOne}</a>
          </p>
        </div>

        <div className="contact-inner-details">
          <div className="icon">
            <img src={iconTwo} alt="" />
          </div>
          <p>
            <a href={urlTwo} target="_chandan">{textTwo}</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactInfoCard;

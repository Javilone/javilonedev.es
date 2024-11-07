import React from "react";
import { Contact } from "../../pods/section4/contact_handler";
import { ContactMail } from "../../pods/section4/contact_mail";

import "../section4/section4_styles.css";
import { Mailcopy } from "../../pods/section4/contact_mail_copy";

export const Section4: React.FC = () => {
  return (
    <div className="section-global fadeIn3">
      <h3 className="section-title">Contacto</h3>
      <div className="contact-container">
        <Contact />
        <ContactMail />
        <Mailcopy />
      </div>
      <div className="contact-container">
        <a href="https://www.linkedin.com/in/javier-lopez-lara/" target="_blank">
          <img src="/icons/linkedin.svg" className="contact-icon heartbeat" />
        </a>
        <a href="https://github.com/Javilone" target="_blank">
          <img src="/icons/github.svg" className="git-icon heartbeat" />
        </a>
      </div>
    </div>
  );
};

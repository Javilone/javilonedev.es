import React from "react";

import "../../scenes/section4/section4_styles.css";

export const ContactMail: React.FC = () => {
  const openEmail = () => {
    const name = "contacto";
    const nameVis = "javilonedev";
    const subject = "";
    const body = "Hola, ";
    const mailtoLink = `mailto:${name + "@" + nameVis + ".es"}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <a onClick={openEmail}>
        <img src="/icons/mail.svg" className="copy-icon heartbeat" alt="Email Icon" />
      </a>
    </>
  );
};

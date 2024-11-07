import React from "react";

import "../../scenes/section4/section4_styles.css";

export const Contact: React.FC = () => {
  const openContact = () => {
    const countryCode = "34";
    const partA = "28";
    const partB = "34";
    const partC = "63";
    const partD = "17";
    const partE = "8";
    const message = "Hola, ";
    const contactLink = `https://wa.me/${countryCode}${partC + partB + partA + partD + partE}?text=${encodeURIComponent(message)}`;
    window.open(contactLink, "_blank");
  };

  return (
    <>
      <a onClick={openContact}>
        <img src="/icons/contact.svg" className="contact-icon heartbeat" alt="Icono de contacto" />
      </a>
    </>
  );
};

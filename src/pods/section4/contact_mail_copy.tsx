import React from "react";

import "../../scenes/section4/section4_styles.css";

export const Mailcopy: React.FC = () => {
  const email = "contacto@javilonedev.es";

  const copiarEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("¡Email copiado al portapapeles!");
      })
      .catch((error) => {
        console.error("Error al copiar el email: ", error);
        alert("Hubo un problema al copiar el email. Por favor, inténtalo de nuevo.");
      });
  };

  return (
    <div>
      <img src="/icons/copy.svg" className="copy-icon heartbeat" alt="Copiar email al portapapeles" onClick={copiarEmail} />
    </div>
  );
};

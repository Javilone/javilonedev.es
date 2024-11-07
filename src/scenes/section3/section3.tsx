import React from "react";

import "../section3/section3_styles.css";

export const Section3: React.FC = () => {
  return (
    <div className="section-global">
      <h3 className="section-title">Sobre mí</h3>
      <div className="mi-container">
        <img src="/images/mifoto.jpeg" alt="Foto de Javier de perfil" className="init-id-foto" />
        <div className="mi-text">
          <p>
            Soy un profesional con 37 años, nacido en Sevilla y residente en Madrid desde hace más de 9 años. Tras adquirir una valiosa experiencia trabajando cara al público en H&M, he decidido dar un giro a mi carrera hacia el{" "}
            <span className="mark-up-text">desarrollo web</span>, un área que me apasiona profundamente.
          </p>
          <p className="section-title" style={{ fontWeight: "bold" }}>
            Formación y avances en programación.
          </p>
          <p>
            Actualmente, estoy completando el <span className="mark-up-text">Máster de Frontend</span> en{" "}
            <a href="https://lemoncode.net" target="_blank">
              Lemoncode
            </a>
            , donde he adquirido competencias en tecnologías como <span className="mark-up-text">React.js, Vue, Angular,</span> y más. Además, tengo un Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) y continúo aprendiendo y aplicando
            nuevas tecnologías.
          </p>
          <p className="section-title" style={{ fontWeight: "bold" }}>
            Intereses y objetivos.
          </p>
          <p>
            Mi objetivo es aplicar mis habilidades de programación para crecer profesionalmente en el desarrollo web y explorar nuevas oportunidades dentro de este sector. En mi tiempo libre, disfruto aprendiendo más sobre programación y jugando a
            videojuegos, lo que me permite estar al tanto de las últimas innovaciones tecnológicas.
          </p>
        </div>
      </div>
    </div>
  );
};

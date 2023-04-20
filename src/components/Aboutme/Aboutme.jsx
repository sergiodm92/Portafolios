import React from "react";
import styleAboutme from "./StyleAboutme.module.scss";

export default function Aboutme() {
  return (
    <div className={styleAboutme.all}>
      <div className={styleAboutme.divCard}>
        <div className={styleAboutme.first}>
          <div className={styleAboutme.title}>
            <h1 className={styleAboutme.tit}>About me:</h1>
          </div>
          <div className={styleAboutme.parrafo}>
            <p className={styleAboutme.parr}>
              Hola soy Full Stack Web Developer me dedico al desarrollo web
              tanto en Front-End como Back-End.
              <br />
              Me apasiona el código, los algoritmos y la resolución de problemas, 
              pero también me interesa el diseño UI/UX. Siempre busco mejorar mi 
              código para hacerlo más limpio y eficiente, y disfruto aprendiendo 
              nuevas tecnologías y metodologías.
              <br />
              Me gustan los desafios, el trabajo en equipo y siempre busco
              alcanzar nuevos objetivos.
              <br />
              Aunque me forme como Ingeniero Civil en la universidad, siempre me
              apasionó la programación y es por ello que me forme en un bootcamp como Full stack developer y 
              ademas estudio y practico dia a dia buscando mejorar mis habilidades mejorando mi 
              código, haciendolo mas eficiente, limpio, escalable y mantenible. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

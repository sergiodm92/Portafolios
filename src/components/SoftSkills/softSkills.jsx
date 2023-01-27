import React from "react";
import styleSoftSkills from "./styleSoftSkills.module.scss";
import Box from "../boxSoftSkills/box";

export default function SoftSkills() {
  return (
    <div>
      <div className={styleSoftSkills.all}>
        <div className={styleSoftSkills.back}>
          <div className={styleSoftSkills.back1}>
            <div className={styleSoftSkills.divtitle}>
              <h3>Las 9 habilidades blandas que mejor me representan </h3>
            </div>
            <div className={styleSoftSkills.items}>
              <div className={styleSoftSkills.divone}>
                <Box
                  text={"Buena Cominicación"}
                  img={
                    "https://comportamientonoverbal.com/clublenguajenoverbal/wp-content/uploads/iniciativa-en-situaciones-de-comunicacion-club-lenguaje-no-verbal-768x528.png"
                  }
                />
              </div>
              <div className={styleSoftSkills.divone}>
                <Box
                  text={"Creatividad"}
                  img={
                    "https://res.cloudinary.com/dk2al2urj/image/upload/v1667396701/MyPortfolio/creatividad_t0hbac.png"
                  }
                />
              </div>
              <div className={styleSoftSkills.divone}>
                <Box
                  text={"Adaptabilidad y Flexibilidad"}
                  img={
                    "https://res.cloudinary.com/dk2al2urj/image/upload/v1667397739/MyPortfolio/adaptabilidad_qdvy1g.png"
                  }
                />
              </div>
              <div className={styleSoftSkills.divone}>
                <Box
                  text={"Pensamiento crítico y Resolución de problemas"}
                  img={
                    "https://res.cloudinary.com/dk2al2urj/image/upload/v1667397866/MyPortfolio/pensamiento_critico_fv0lot.png"
                  }
                />
              </div>
              <div className={styleSoftSkills.divone}>
                <Box
                  text={"Motivación e Inciativa"}
                  img={
                    "https://res.cloudinary.com/dk2al2urj/image/upload/v1667397973/MyPortfolio/motivaci%C3%B3n_igomss.png"
                  }
                />
              </div>
              <div className={styleSoftSkills.divone}>
                <Box
                  text={"Curiosidad y aprendizaje"}
                  img={
                    "https://res.cloudinary.com/dk2al2urj/image/upload/v1667398169/MyPortfolio/curiosidad_e6jryk.png"
                  }
                />
              </div>
              <div className={styleSoftSkills.divone}>
                <Box
                  text={"Actitud Positiva"}
                  img={
                    "https://res.cloudinary.com/dk2al2urj/image/upload/v1667397549/MyPortfolio/actitud_ahhc1l.png"
                  }
                />
              </div>
              <div className={styleSoftSkills.divone}>
                <Box
                  text={"Trabajo en equipo"}
                  img={
                    "https://res.cloudinary.com/dk2al2urj/image/upload/v1667397175/MyPortfolio/team_work_ydwrat.png"
                  }
                />
              </div>
              <div className={styleSoftSkills.divone}>
                <Box
                  text={"Gestion de Estrés"}
                  img={
                    "https://res.cloudinary.com/dk2al2urj/image/upload/v1667397016/MyPortfolio/stress_bnhzvo.png"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

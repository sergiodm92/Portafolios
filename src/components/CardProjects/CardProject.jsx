import React from "react";
import Carousel from "react-bootstrap/Carousel";
import StylesCard from "./CardPublication.module.scss";

const CardProject = ({ summary, album, title, technologiesPrimary, technologiesSecundary }) => {
  return (
    <div className={StylesCard.publication}>
      <div className={StylesCard.cardimage}>
        <div className={StylesCard.carruselCont}>
          <Carousel className={StylesCard.carrusel}>
            {album?.map((e, i) => {
              return (
                <Carousel.Item key={i}>
                  <img src={e} alt="First slide" />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div className={StylesCard.divTechnologies}>
        <div className={StylesCard.technologies}>
          {technologiesPrimary.map((tech, e) => {
            return <p style={{ color: "white" }}>{tech}</p>;
          })}
        </div>
        <div className={StylesCard.technologies}>
          {technologiesSecundary.map((tech, e) => {
            return <p style={{ color: "white" }}>{tech}</p>;
          })}
        </div>
        </div>  
      </div>
      <div className={StylesCard.cardtext}>
        <p className={StylesCard.title}>{title}</p>
        <div>
          <p className={StylesCard.summary}>{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProject;

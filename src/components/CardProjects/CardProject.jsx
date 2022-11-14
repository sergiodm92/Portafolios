import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import StylesCard from "./CardPublication.module.scss";



const CardProject = ({summary, album, title}) => {
  return (
    <div className={StylesCard.publication}>
        <div className={StylesCard.cardimage}>
          <div className={StylesCard.carruselCont}>
            <Carousel className={StylesCard.carrusel}>
              {album?.map((e,i) => {
              return  <Carousel.Item key={i}>
                        <img src={e} alt="First slide" />
                      </Carousel.Item>
              })}
            </Carousel>
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

export default CardProject
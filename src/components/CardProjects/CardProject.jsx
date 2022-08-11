import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import StylesCard from "./CardPublication.module.scss";


const CardProject = ({ id, summary, album, title }) => {

return (
    <div className={StylesCard.comp_card_publication}>
        <div className={StylesCard.card}>



            <div className={StylesCard.cardimage}>

            <div>
              <Carousel fade>
                {album?.map((e,i) => {
                return <Carousel.Item key={i}>
                <img src={e} alt="First slide"
              />
            </Carousel.Item>
        })}

    </Carousel>
    
          </div>
          </div>

          <div className={StylesCard.cardtext}>
            <p className={StylesCard.title}>{title}</p>
            <div className={StylesCard.cardtext}>
            <p className={StylesCard.title}>{summary}</p>
            </div>

        </div>
        </div>

          <div className={StylesCard.cardstats}></div>
        
      </div>
    
  );
};

export default CardProject
import React, {useState} from "react";
import { Carousel } from "bootstrap";
import StylesCard from "./CardPublication.module.scss";


const CardProject = ({ id, summary, album, title }) => {

   const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <div className={StylesCard.comp_card_publication}>
          <div className={StylesCard.card}>
            <div className={StylesCard.cardimage}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=First slide&bg=373940"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />

          <div className={StylesCard.cardtext}>
            <p className={StylesCard.title}>{title}</p>
            <div className={StylesCard.cardtext}>
            <p className={StylesCard.title}>{summary}</p>


            </div>
            <div className={StylesCard.cardtext}>
              <h1 className={StylesCard.title}>{title}</h1>
              <p className={StylesCard.summary}></p>
            </div>
          </div>
          <div className={StylesCard.cardstats}></div>
        </div>
    );
  };

export default CardProject
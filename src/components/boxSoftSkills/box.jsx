import React from "react";
import styleBR from "./box.module.scss";

const Box = ({ img, text }) => {
  return (
    <div className={styleBR.cont}>
      <p className={styleBR.text}>{text}</p>
      <img src={img} alt="img" className={styleBR.imagen} />
    </div>
  );
};

export default Box;

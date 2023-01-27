import React from "react";
import styleBR from "./Button_redes.module.scss";

const ButtonRedes = ({ img, onClick, text }) => {
  return (
    <div className={styleBR.cont} onClick={onClick}>
      <img src={img} alt="img" className={styleBR.imagen} />
      <p className={styleBR.text}>{text}</p>
    </div>
  );
};

export default ButtonRedes;

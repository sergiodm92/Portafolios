import React from "react";
import styleB from "./Button.module.scss";

const Button = ({ title, onClick }) => {
  return (
    <div className={styleB.buttons}>
      <button className={styleB.btnHover} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;

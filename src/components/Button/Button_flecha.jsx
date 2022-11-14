import React from "react";
import styleBF from './Button_flecha.module.scss';

const ButtonFlecha = ({ img, onClick}) => {
    return (
        <div className={styleBF.cont} onClick={onClick}>
            <img src={img} alt="img" className={styleBF.imagen}/>
        </div>
    );
};

export default ButtonFlecha;
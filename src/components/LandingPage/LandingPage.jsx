import React from "react";
import { Link } from "react-router-dom";
import styleLanding from "./LandingPage.module.scss"

export default function LandingPage(){
    
    return(
        <div className={styleLanding.background}> 
        <div className={styleLanding.cohete}>
        <div className={styleLanding.divbutton}>        
                <Link className={styleLanding.link} to={'/Home'}>
                    <button className={styleLanding.ButtonHome}>GO</button>  
                </Link>
            </div>
        </div>
            <div className={styleLanding.title}>
            <p class="line anim-typewriter">{"<Welcome to my Portfolio/>"}</p>
            </div>
            <div className={styleLanding.llamita}></div>
     
        </div>
    )
}
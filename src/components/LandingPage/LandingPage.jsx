import React from "react";
import { Link } from "react-router-dom";
import styleLanding from "./LandingPage.module.scss"

export default function LandingPage(){
    const title="<Wellcome to my Portfolio/>"
    return(
        <div className={styleLanding.background}> 
            <div className={styleLanding.divtitle}>
                <p className={styleLanding.title}> {title} </p>
            </div>
            <div className={styleLanding.divbutton}>        
                <Link className="link" to={'/Home'}>
                    <button className={styleLanding.ButtonHome}>GO</button>  
                </Link>
            </div>
        </div>
    )
}
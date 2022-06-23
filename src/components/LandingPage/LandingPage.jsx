import React from "react";
import "./LandingPage.css"
import { Link } from "react-router-dom";

export default function LandingPage(){

    return(

        <div className="imghome"> 
        <div className="divtitle">
        <p className="title">My Portfolio</p>
        </div>
        <div className="divbutton">        
        <Link className="link" to={'/home'}>
        <button className="ButtonHome">GO</button>  
        </Link>
        </div>
        
        </div>
        

    )
}
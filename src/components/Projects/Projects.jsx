import React from "react";
import NavBar from "../Navbar/NavBar";
import styleProjects from "./StyleProjects.module.scss"

export default function Proyects(){
    return(
        <div>
            <div className={styleProjects.back}>
            <div className={styleProjects.navbar}>
                <NavBar/>
            </div>
            <div className={styleProjects.divHome}>

            </div>
        
            </div>
        </div>
    )
}
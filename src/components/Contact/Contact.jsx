import React from "react";
import NavBar from "../Navbar/NavBar";
import styleContact from "./StyleContact.module.scss"

export default function Proyects(){
    return(
        <div className={styleContact.back}>
            <div className={styleContact.navbar}>
                <NavBar/>
            </div>
            <div className={styleContact.divHome}>
               
            </div>
        
        </div>
    )
}
import React from "react"
import NavBar from "../Navbar/NavBar"
import styleHome from "./Home.module.scss"
import cv from "../../Utils/Curriculum.pdf"


export default function Home(){

      
    return (
        <div>
        <div className={styleHome.navbar}>
                <NavBar/>
            </div>
        <div className={styleHome.back}>
            
            <div className={styleHome.divHome}>
                <h6>Hi here! I am</h6>
                <h1>MARIANA ROCÍO RIONDA</h1>
                <h4>Full Stack Web Developer</h4>
                <a href={cv} download="cv.pdf">
                <button className={styleHome.buttonCV}>Download CV.pdf</button>
                </a>
            </div>
            
        </div>
        <div className={styleHome.back1}>
                <div className={styleHome.perfil}></div>
                <div className={styleHome.circle}></div>
                <div className={styleHome.circle}></div>
            </div>
        </div>
    )
}



    
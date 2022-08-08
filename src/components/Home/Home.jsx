import React from "react"

import NavBar from "../NavBar/NavBar"
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
                <h1>DAVID MAIOLI SERGIO ANDRES</h1>
                <h4>Full Stack Web Developer</h4>
                <a href={cv} download="cv.pdf">
                <button className={styleHome.buttonCV}>Download CV.pdf</button>
                </a>
            </div>
            
            </div>
            <div className={styleHome.back1}>
                <div className={styleHome.perfil}></div>
                <div className={styleHome.links}>
                    <a href="https://github.com/sergiodm92">
                        <div className={styleHome.GitHuub}/>
                    </a>
                    <a href="mailto:crgiodm@gmail.com">
                        <div className={styleHome.Gmail}/>
                    </a>
                    <a href="https://www.linkedin.com/in/sergio-andres-david-maioli-196812176">
                        <div className={styleHome.Linkedin}/>
                    </a>
                </div>
                
            </div>
        </div>
    )
}



    
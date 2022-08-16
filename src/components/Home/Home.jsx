import React from "react"
import "./home.css"
import NavBar from "../NavBar/NavBar"
import styleHome from "./Home.module.scss"
import cv from "../../Utils/Curriculum.pdf"





export default function Home(){


    return (
        <div >
            
            <div className={styleHome.back}>
            <div className={styleHome.navbar}>
                <NavBar/>
            </div>
            
            <div className={styleHome.divHome}>
                <h4>Hi here! I am</h4>
                <br/>
                
                <h1>DAVID MAIOLI SERGIO ANDRES </h1>
                <br></br>
                <br></br>


                <h4 class="line anim-typewriter">Full Stack Web Developer</h4> 
                <br></br>
                <br></br>
                <br></br>
                <br></br>


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



    
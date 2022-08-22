import React from "react"
import "./home.css"
import NavBar from "../NavBar/NavBar"
import NavBar2 from "../NavBar2/NavBar2"
import styleHome from "./Home.module.scss"
import cv from "../../Utils/Curriculum.pdf"


export default function Home(){


    return (
        <div className={styleHome.all}>
         <div className={styleHome.navbar2}>
                <NavBar2/>
        </div>    
            <div className={styleHome.back}>
            <div className={styleHome.navbar}>
                <NavBar/>
            </div>
            
            <div className={styleHome.divHome}>
                <p className={styleHome.hello}>Hi here! I am</p>
                <br/>
                
                <p className={styleHome.Name}>DAVID MAIOLI SERGIO ANDRES </p>
                <br></br>
                <br></br>


                <h4 class="line anim-typewriter">Full Stack Web Developer</h4> 



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



    
import React from "react";
import NavBar from "../NavBar/NavBar";
import styleAboutme from "./StyleAboutme.module.scss"


export default function Aboutme(){

    return(
        <div>
            <div className={styleAboutme.back}>
            <div className={styleAboutme.navbar}>
                <NavBar/>
            </div>
            <div className={styleAboutme.divHome}>
            <h1 className={styleAboutme.title}>About me </h1>
            <p>I’m a Frontend Developer based in Marrakech, Who likes to provide solutions for people's projects 
            and businesses which it is a challenge that I enjoy overcoming.
            I am a passionate person who pursues his dreams, who works hard and who is results oriented. As a matter 
            of fact, I constantly work on improving myself seeking to achieve the best version of myself.
            I build websites using HTML, CSS, JavaScript, and a other frameworks and libraries. 
            I spend most days learning and building up, either start it from scratch or adding some customized features 
            and functionality for outdated websites to make them shine again.</p>
            <div className={styleAboutme.contentStylediv}>
            </div>
            </div>
        
            </div>
        </div>
    )
}


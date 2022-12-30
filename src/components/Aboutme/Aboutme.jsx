import React from "react";
import NavBar from "../NavBar/NavBar";
import styleAboutme from "./StyleAboutme.module.scss"

export default function Aboutme(){

    return(
        <div className={styleAboutme.all}> 
            <div className={styleAboutme.navbar}>
                <NavBar/>
            </div>
            <div className={styleAboutme.divCard}>
                <div className={styleAboutme.first}>
                    <div className={styleAboutme.title}>
                        <h1 className={styleAboutme.tit}>Sobre mi:</h1>
                    </div>
                    <div className={styleAboutme.parrafo}>
                        <p className={styleAboutme.parr}>Hola soy Full Stack Web Developer me dedico al desarrollo web tanto en Front-End como Back-End.<br/>
                            Me apasionada el codigo, los algoritmos, la resolución de problemas, pero también el diseño UI/UX, busco mejorar mi código haciendoló mas limpio y eficiente, disfruto aprender nuevas tecnologías y metodologias.<br/>
                            Me gustan los desafios, el trabajo en equipo y siempre busco alcanzar nuevos objetivos.<br/>
                            Aunque me forme como Ingeniero Civil en la universidad, siempre me apasionó la programación y es por ello que me dedico desde 2020 a esto.  
                            Actualmente me encuentro desarrollando proyectos de manera freelance con un pequeño equipo de trabajo, y capacitandome continuamente.
                            Estoy en busqueda de una empresa donde pueda crecer de manera profesional e introducirme en el mundo IT</p>
                    </div>
                </div>

            </div>
        </div>
    )
}


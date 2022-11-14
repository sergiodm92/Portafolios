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
                        <p className={styleAboutme.parr}>Hola soy Full Stack Web Developer me dedico al desarrollo de paginas web tanto como en Front-End como Back-End.<br/>
                            Soy una persona apasionada por el codigo, los algoritmos y el diseño, siempre buscando mejorar y dispuesto a aprender.<br/>
                            Me gustan los desafios y siempre busco alcanzar nuevos objetivos.<br/>
                            Aunque me forme como Ingeniero Civil siempre me apasionó la programación y es por ello que es a lo unico que me dedico ahora! 
                            Actualmente me encuentro desarrollando proyectos de manera freelance, y capacitandome continuamente.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}


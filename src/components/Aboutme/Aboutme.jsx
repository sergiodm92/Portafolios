import React,{useState} from "react";
import NavBar from "../NavBar/NavBar";

import styleAboutme from "./StyleAboutme.module.scss"




export default function Aboutme(){
    const [lenguage,setLenguage] = useState(1)
    function len(){
        if(lenguage===1)setLenguage(0)
        if(lenguage===0)setLenguage(1)
    }

    return(
        <div>
            <div className={styleAboutme.back}>
            <div className={styleAboutme.navbar}>
                <NavBar/>
            </div>
            <div className={styleAboutme.divHome}>
            <div className={styleAboutme.switchButton} >
                        <p>English/Spanish</p>
                        <input type="checkbox"  id="switch-label" onChange={()=> len()} className={styleAboutme.switchbuttoncheckbox} />
                        <label for="switch-label" className={styleAboutme.switchButtonLabel} ></label>
                    </div>
                    {lenguage===0? 
                        <div className={styleAboutme.text} >
            <h1 className={styleAboutme.title}>Sobre mi </h1>
            <p>Soy un desarrollador frontend con sede en Marrakech, a quien le gusta brindar soluciones para los proyectos de las personas.
            y negocios que es un reto que disfruto superar.Soy una persona apasionada que persigue sus sueños, que trabaja duro y que está orientada a resultados. 
            Como un asunto de hecho, trabajo constantemente en mejorarme buscando alcanzar la mejor versión de mí mismo.
            Construyo sitios web utilizando HTML, CSS, JavaScript y otros marcos y bibliotecas.
            Paso la mayoría de los días aprendiendo y construyendo, ya sea comenzando desde cero o agregando algunas características personalizadas.
            y funcionalidad para sitios web obsoletos para que vuelvan a brillar.</p>
            </div>

            : 
            <div className={styleAboutme.text}>
            <h1 className={styleAboutme.title}>About me </h1>
            <p>I’m a Frontend Developer based in Marrakech, Who likes to provide solutions for people's projects 
            and businesses which it is a challenge that I enjoy overcoming.
            I am a passionate person who pursues his dreams, who works hard and who is results oriented. As a matter 
            of fact, I constantly work on improving myself seeking to achieve the best version of myself.
            I build websites using HTML, CSS, JavaScript, and a other frameworks and libraries. 
            I spend most days learning and building up, either start it from scratch or adding some customized features 
            and functionality for outdated websites to make them shine again.</p>
            </div>
                    }

            <div className={styleAboutme.contentStylediv}>
            </div>
                    
            </div>
                    
            </div>
        </div>
    )
}


import React,{useState} from "react";
import NavBar from "../NavBar/NavBar";
import NavBar2 from "../NavBar2/NavBar2"

import styleAboutme from "./StyleAboutme.module.scss"




export default function Aboutme(){
    const [lenguage,setLenguage] = useState(1)
    function len(){
        if(lenguage===1)setLenguage(0)
        if(lenguage===0)setLenguage(1)
    }

    return(
        <div className={styleAboutme.all}>
        <div className={styleAboutme.navbar2}>
                <NavBar2/>
        </div>    
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
                            <p>
                            Hola soy Full Stack Web Developer me dedico al desarrollo de paginas web tanto como en Front-End como Back-End.<br/>
                            Soy una persona apasionada por el codigo, los algoritmos y el diseño, comprometida con su trabajo que siempre busca aprender
                            sobre nuevas tecnologías y todo lo que necesite para desempeñarme bien en mi trabajo.<br/>
                            Me gustan los desafios y siempre intento alcanzar nuevos objetivos.<br/>
                            Siempre me gustó la programación aunque hasta hace unos años no habia tenido la oportunidad de desembolverme en el area, me forme
                            como Ingeniero Civil en la Universidad de Salta(Argentina), despues de varios años trabajando en la profesión me di cuenta que mi
                            verdadera pasion es el codigo y el diseño.
                            Actualmente me encuentro aprendiendo nuevas tecnologías, diseño UX, idiomas y desarrollando proyectos personales, estoy 
                            abiertos a oportunidades laborales  y a escuchar nuevas propuestas.
                            </p>
                        </div>

                        : 
                            <div className={styleAboutme.text}>
                            <h1 className={styleAboutme.title}>About me </h1>
                            <p>
                            Hi, I am a Full Stack Web Developer. I am dedicated to the development of web pages both in Front-End and Back-End.
                            I am a person passionate about code, algorithms and design, committed to his work and always looking to learn.
                            about new technologies and everything I need to perform well in my job.
                            I like challenges and I always try to achieve new goals.
                            I have always liked programming although until a few years ago I had not had the opportunity to work in the area, I trained
                            as a Civil Engineer at the University of Salta (Argentina), after several years working in the profession I realized that my
                            true passion is the code and design.
                            I am currently learning new technologies, UX design, languages and developing personal projects, I am
                            open to job opportunities and listening to new proposals.
                            </p>
                            </div>
                        }

            <div className={styleAboutme.contentStylediv}>
            </div>
                    
            </div>
                    
            </div>
        </div>
    )
}


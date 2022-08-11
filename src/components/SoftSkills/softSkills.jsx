import React,{useState} from "react"
import styleSoftSkills from "./styleSoftSkills.module.scss"
import NavBar from "../NavBar/NavBar"


export default function SoftSkills(){
const [lenguage,setLenguage] = useState(1)
function len(){
    if(lenguage===1)setLenguage(0)
    if(lenguage===0)setLenguage(1)
    }


    return (
        <div>
            <div className={styleSoftSkills.back}>
                <div className={styleSoftSkills.navbar}>
                    <NavBar/>
                </div>
            <div className={styleSoftSkills.back1}>
                <div className={styleSoftSkills.switchButton} >
                    <p>English/Spanish</p>
                    <input type="checkbox"  id="switch-label" onChange={()=> len()} className={styleSoftSkills.switchbuttoncheckbox} />
                    <label for="switch-label" className={styleSoftSkills.switchButtonLabel} ></label>
                </div>
                <div className={styleSoftSkills.divtitle}>
                    {lenguage===0? 
                    <p>Las 10 Soft Skills que mas me representan </p>
                    : 
                    <p>The 10 Soft Skills that represent me the most</p>
                    }
                    
                </div>
                <div className={styleSoftSkills.divone}>
                {lenguage===0? 
                    <p>Buena Cominicación </p>
                    : 
                    <p>Good Communication</p>
                    }
                    <a  className={styleSoftSkills.Communication}/>
                </div>
          
                <div className={styleSoftSkills.divone}>
                {lenguage===0? 
                    <p>Creatividad  </p>
                    : 
                    <p>Creativity</p>
                    }
                    <a  className={styleSoftSkills.Creativity}/>
                </div>
                <div className={styleSoftSkills.divone}>
                {lenguage===0? 
                    <p>Adaptabilidad y Flexibilidad</p>
                    : 
                    <p>Adaptability and Flexibility</p>
                    }
                    <a  className={styleSoftSkills.adaptabilidad}/>
                </div>
                <div className={styleSoftSkills.divone}>
                {lenguage===0? 
                    <p>Pensamiento critico y Resolución de problemas  </p>
                    : 
                    <p>Critical Thinking & Problem Solving</p>
                    }
                    <a  className={styleSoftSkills.think}/>
                </div>
                <div className={styleSoftSkills.divone}>
                {lenguage===0? 
                    <p>Motivación e Inciativa </p>
                    : 
                    <p>Motivation and Initiative</p>
                    }
                    <a  className={styleSoftSkills.motivation}/>
                </div>
                <div className={styleSoftSkills.divone}>
                {lenguage===0? 
                    <p>Curiosidad y aprendizaje </p>
                    : 
                    <p>Curiosity and Active Learning</p>
                    }
                    <a  className={styleSoftSkills.curiosity}/>
                </div>
                <div className={styleSoftSkills.divone}>
                {lenguage===0? 
                    <p>Actitud Positiva </p>
                    : 
                    <p>positive attitude</p>
                    }
                    <a className={styleSoftSkills.attitude}/>
                </div>
                <div className={styleSoftSkills.divone}>
                {lenguage===0? 
                    <p>Trabajo en equipo </p>
                    : 
                    <p>Teamwork</p>
                    }
                    <a className={styleSoftSkills.teamwork}/>
                </div>
                <div className={styleSoftSkills.divone}>
                {lenguage===0? 
                    <p>Gestion de Estrés </p>
                    : 
                    <p>stress management</p>
                    }
                    <a  className={styleSoftSkills.stress}/>
                </div>
                </div>
        
            </div>
    </div>
    )
}




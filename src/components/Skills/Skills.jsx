import React from "react"
import NavBar from "../Navbar/NavBar"
import styleSkills from "./styleSkills.module.scss"
import SimpleAccordion from "../Accordion/Accordion"
import { Link } from "react-router-dom"



export default function Skills(){

    return (
        <div className={styleSkills.back}>
            <div className={styleSkills.navbar}>
                <NavBar/>
            </div>
            <div className={styleSkills.divHome}>
            <div className={styleSkills.accordion}>
            <SimpleAccordion
            name="JavaScript"
            resume="asdasda"
            />
            </div>
            <div className={styleSkills.accordion}>
            <SimpleAccordion
            name="Node.js"
            resume="asdasda"
            />
            </div>
            <div className={styleSkills.accordion}>
            <SimpleAccordion
            name="React-Redux"
            resume="asdasda"
            />
            </div>
            <div className={styleSkills.accordion}>
            <SimpleAccordion
            name="Style-components"
            resume="asdasda"
            />
            </div>
            <div className={styleSkills.accordion}>
            <SimpleAccordion
            name="Express"
            resume="asdasda"
            />
            </div>
            <div className={styleSkills.accordion}>
            <SimpleAccordion
            name="PostgreSQL"
            resume="asdasda"
            />
            </div>
            <div className={styleSkills.accordion}>
            <SimpleAccordion
            name="Frameworks"
            resume="asdasda"
            />
            </div>
            </div>
            <div className={styleSkills.back1}>
            <a href="https://www.javascript.com/" className={styleSkills.JavaScript}>
            </a>
            <a href="https://nodejs.org/en/" className={styleSkills.Nodejs}>
            </a>
            <a href="https://es.reactjs.org/" className={styleSkills.React}>
            </a>
            <a href="https://es.redux.js.org/" className={styleSkills.Redux}>
            </a>
            <a href="https://www.postgresql.org/" className={styleSkills.PosgreSQL}>
            </a>
            <a href="https://sass-lang.com/" className={styleSkills.SaSS}>
            </a>
            <a href="https://mui.com/" className={styleSkills.MaterialUI}>
            </a>
            <a href="https://getbootstrap.com/" className={styleSkills.BootStrap}>
            </a>
            <a href="https://jestjs.io/" className={styleSkills.Jest}>
            </a>
            <a href="https://jestjs.io/" className={styleSkills.Jest}>
            </a>
            <a href="https://jestjs.io/" className={styleSkills.Jest}>
            </a>
            <a href="https://jestjs.io/" className={styleSkills.Jest}>
            </a>



            </div>
        
        </div>
        
    )
}


// <div>
//             <NavBar/>
//             <h1>My Skills</h1>
//             <ul>
//                 <li>React.js</li>
//                 <li>Redux.js</li>
//                 <li>Node.js</li>
//                 <li>PostgreSQL</li>
//                 <li>HTML</li>
//                 <li>CSS</li>
//                 <li>ES6</li>
//                 <li>CorelDraw</li>
//             </ul>
//             <h1>Languages</h1>
//             <h3>English</h3>
//             <h4>Level B1</h4>            
//         </div>


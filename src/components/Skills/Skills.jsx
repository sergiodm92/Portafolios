import React from "react"
import NavBar from "../Navbar/NavBar"
import styleSkills from "./styleSkills.module.scss"
import SimpleAccordion from "../Accordion/Accordion"




export default function Skills(){

    return (
        <div className={styleSkills.back}>
            <div className={styleSkills.navbar}>
                <NavBar/>
            </div>
            <div className={styleSkills.divHome}>
            <div className={styleSkills.accordion1}>
            <SimpleAccordion
            name="JavaScript"
            resume="asdasda askdhjlkahdkla alkhsdklasfalñf ahfioewqhifgowehgnw njfcvposoipfpg snajdfpoisdjof opjsopvjojwe jeopwjfopwej nfiwejngfipowe mofoewpmf"
            />
            </div>
            <div className={styleSkills.accordion2}>
            <SimpleAccordion
            name="Node.js"
            resume="asdasda"
            />
            </div>
            <div className={styleSkills.accordion3}>
            <SimpleAccordion
            name="React-Redux"
            resume="asdasda"
            />
            </div>
            <div className={styleSkills.accordion4}>
            <SimpleAccordion
            name="Style-components"
            resume="asdasda"
            />
            </div>
            <div className={styleSkills.accordion5}>
            <SimpleAccordion
            name="Express"
            resume="asdasda"
            />
            </div>
            <div className={styleSkills.accordion6}>
            <SimpleAccordion
            name="PostgreSQL"
            resume="asdasda"
            />
            </div>
            <div className={styleSkills.accordion7}>
            <SimpleAccordion
            name="HTML5"
            resume="asdasda"
            />
            </div>
            <div className={styleSkills.accordion8}>
            <SimpleAccordion
            name="CSS"
            resume="asdasda"
            />
            </div>
            <div className={styleSkills.accordion9}>
            <SimpleAccordion
            name="SASS"
            resume="asdasda"
            />
            </div>
            <div className={styleSkills.accordion10}>
            <SimpleAccordion
            name="Material U-I"
            resume="asdasda"
            />
            </div>
            <div className={styleSkills.accordion11}>
            <SimpleAccordion
            name="BootStrap"
            resume="asdasda"
            />
            </div>
            <div className={styleSkills.accordion12}>
            <SimpleAccordion
            name="Git-Flow"
            resume="asdasda"
            />
            </div>
            </div>
            <div className={styleSkills.back1}>
            <a href="https://www.javascript.com/" className={styleSkills.JavaScript}>
            </a>
            <a href="https://nodejs.org/en/" className={styleSkills.Nodejs}>
            </a>
            <a href="https://reactjs.org/" className={styleSkills.React}>
            </a>
            <a href="https://redux.js.org/" className={styleSkills.Redux}>
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
            <a href="https://en.wikipedia.org/wiki/HTML5" className={styleSkills.Html5}>
            </a>
            <a href="https://en.wikipedia.org/wiki/CSS" className={styleSkills.css}>
            </a>
            <a href="https://www.npmjs.com/" className={styleSkills.npm}>
            </a>
            <a href="https://docs.github.com/es/get-started/quickstart/github-flow" className={styleSkills.git}>
            </a>
            <a href="https://jestjs.io/" className={styleSkills.npm}>
            </a>
            <a href="http://expressjs.com/" className={styleSkills.express}>
            </a>
            <a href="https://vercel.com/" className={styleSkills.vercel}>
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


import React from "react"
import NavBar from "../Navbar/NavBar"
import styleSkills from "./styleSkills.module.scss"
import SimpleAccordion from "../Accordion/Accordion"




export default function Skills(){

    return (
        <div>
            <div className={styleSkills.back}>
                <div className={styleSkills.navbar}>
                    <NavBar/>
                </div>
            <div className={styleSkills.back1}>
                <div className={styleSkills.divone}>
                    <a href="https://www.javascript.com/" className={styleSkills.JavaScript}>
                        <p>Javascript</p>
                    </a>
                    <a href="https://vercel.com/" className={styleSkills.cplusplus}>
                        <p>C++</p>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/HTML5" className={styleSkills.Html5}>
                        <p>HTML5</p>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/CSS" className={styleSkills.css}>
                        <p>CSS</p>
                    </a>
                    <a href="https://sass-lang.com/" className={styleSkills.SaSS}>
                        <p>SaSS</p>
                    </a>
                    <a href="https://www.postgresql.org/" className={styleSkills.Secualize}>
                    <p>Secualize</p>
                    </a>
                </div>
                <div className={styleSkills.divtwo}>
                    <a href="https://reactjs.org/" className={styleSkills.React}>
                        <p>React</p>
                    </a>
                    <a href="https://redux.js.org/" className={styleSkills.Redux}>
                        <p>Redux</p>
                    </a>
                    <a href="https://nodejs.org/en/" className={styleSkills.Nodejs}>
                        <p>Node.js</p>
                    </a>
                    <a href="http://expressjs.com/" className={styleSkills.express}>
                        <p>Express.js</p>
                    </a>
                    <a href="https://www.postgresql.org/" className={styleSkills.PosgreSQL}>
                        <p>PosgreSQL</p>
                    </a>
                </div>
                <div className={styleSkills.divthree}>
                    <a href="https://mui.com/" className={styleSkills.MaterialUI}>
                        <p>Material.UI</p>
                    </a>
                    <a href="https://getbootstrap.com/" className={styleSkills.BootStrap}>
                        <p>BootStrap</p>
                    </a>
                    <a href="https://www.npmjs.com/" className={styleSkills.npm}>
                        <p>npm</p>
                    </a>
                    <a href="https://vercel.com/" className={styleSkills.figma}>
                        <p>Figma</p>
                    </a>
                    <a href="https://jestjs.io/" className={styleSkills.Jest}>
                        <p>Jest</p>
                    </a>
                    <a href="https://docs.github.com/es/get-started/quickstart/github-flow" className={styleSkills.git}>
                        <p>Git.Flow</p>
                    </a>
                </div>
                <div className={styleSkills.divfour}>
                    <a href="https://vercel.com/" className={styleSkills.scrum}>
                        <p>Methodology.Scrum</p>
                    </a>
                    <a href="https://vercel.com/" className={styleSkills.github}>
                        <p>Git.Hub</p>
                    </a>
                    <a href="https://vercel.com/" className={styleSkills.vercel}>
                        <p>Vercel</p>
                    </a>
                    <a href="https://vercel.com/" className={styleSkills.trello}>
                        <p>Trello</p>
                    </a>
                </div>
            </div>
        
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


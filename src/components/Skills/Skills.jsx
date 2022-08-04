import React from "react"
import NavBar from "../Navbar/NavBar"
import styleSkills from "./styleSkills.module.scss"


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
                    <a href="https://www.python.org/" className={styleSkills.Python}>
                        <p>Python</p>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/C%2B%2B" className={styleSkills.cplusplus}>
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
                    <a href="https://sequelize.org/" className={styleSkills.Secualize}>
                    <p>Secualize</p>
                    </a>
                </div>
                <div className={styleSkills.divtwo}>
                    <a href="https://code.visualstudio.com/" className={styleSkills.VisualStudioCode}>
                        <p>Visual.Studio.Code</p>
                    </a>
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
                    <a href="https://www.figma.com/" className={styleSkills.figma}>
                        <p>Figma</p>
                    </a>
                    <a href="https://jestjs.io/" className={styleSkills.Jest}>
                        <p>Jest</p>
                    </a>
                    <a href="https://docs.github.com/es/get-started/quickstart/github-flow" className={styleSkills.git}>
                        <p>Git.Flow</p>
                    </a>
                    <a href="https://insomnia.rest/" className={styleSkills.Insomnia}>
                        <p>Insomnia</p>
                    </a>
                </div>
                <div className={styleSkills.divfour}>
                    <a href="https://en.wikipedia.org/wiki/Scrum_(software_development)" className={styleSkills.scrum}>
                        <p>Methodology.Scrum</p>
                    </a>
                    <a href="https://github.com/" className={styleSkills.github}>
                        <p>Git.Hub</p>
                    </a>
                    <a href="https://vercel.com/" className={styleSkills.vercel}>
                        <p>Vercel</p>
                    </a>
                    <a href="https://trello.com/" className={styleSkills.trello}>
                        <p>Trello</p>
                    </a>
                    <a href="https://trello.com/" className={styleSkills.B1}>
                        <p>English.B1</p>
                    </a>
                  
                    <a href="https://www.postman.com/" className={styleSkills.Postman}>
                        <p>PostMan</p>
                    </a>
                </div>
            </div>
        
            </div>
    </div>
    )
}




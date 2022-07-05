import React from "react"
import NavBar from "../NavBar/NavBar"
import "./Skills.css"

export default function Skills(){
    return (
        <div>
            <NavBar/>
            <h1>My Skills</h1>
            <ul>
                <li>React.js</li>
                <li>Redux.js</li>
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>ES6</li>
                <li>CorelDraw</li>
            </ul>
            <h1>Languages</h1>
            <h3>English</h3>
            <h4>Level B1</h4>            
        </div>
    )
}
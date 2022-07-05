import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar(){
    return (
        <div className="box1">
            <Link to="/Home">Home</Link>
            <Link to="/Skills">Skills</Link>
            <Link to="/Projects">Proyects</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    )
}
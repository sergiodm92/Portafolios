import React from "react"
import NavBar from "../NavBar/NavBar"
import "./Home.css"

export default function Home(){
    function handleClick(e){
        e.preventDefault()
    }
    return (
        <div className="back">
            <div className="navbar">
                <NavBar/>
            </div>
            <div className="div-home">
                <h6>Hi here! I am</h6>
                <h1>MARIANA ROCÍO RIONDA</h1>
                <h4>Full Stack Web Developer</h4>
                <button className="buttonCV" onClick={(e)=>handleClick(e)}>Descargar CV</button>
            </div>
            <div className="back1">
                <div className="perfil"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    )
}
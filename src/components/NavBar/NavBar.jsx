import React from "react"
import styleNavbar from "./NavBar.module.scss"
import { useNavigate } from "react-router-dom"



export default function NavBar(){
    const nav = useNavigate()

    
    return (
        
        <div className={styleNavbar.box1}>
                    <button className={window.location.href.includes("Home") ? styleNavbar.ButtonHover: styleNavbar.Button } onClick={() => {nav(`/Home`)}}>
						<p className={styleNavbar.ptext}>Home</p>
					</button>
                    <button className={window.location.href.includes("About") ? styleNavbar.ButtonHover: styleNavbar.Button } onClick={() => {nav(`/Aboutme`)}}>
						<p className={styleNavbar.ptext}>About</p>
					</button>
                    <button className={window.location.href.includes("Skills") ? styleNavbar.ButtonHover: styleNavbar.Button} onClick={() => {nav(`/Skills`)}}>
						<p className={styleNavbar.ptext}>Skills</p>
					</button>
                    <button className={window.location.href.includes("SoftSk") ? styleNavbar.ButtonHover: styleNavbar.Buttonsk} onClick={() => {nav(`/SoftSk`)}}>
						<p className={styleNavbar.ptextsk}>Soft <br></br>Skills</p>
					</button>
                    <button className={window.location.href.includes("Projects") ? styleNavbar.ButtonHover: styleNavbar.Button} onClick={() => {nav(`/Projects`)}}>
						<p className={styleNavbar.ptext}>Projec.</p>
					</button>
                    <button className={window.location.href.includes("Contact") ? styleNavbar.ButtonHover: styleNavbar.Button} onClick={() => {nav(`/Contact`)}}>
						<p className={styleNavbar.ptext}>Contact</p>
					</button>
            </div>
        
    )
}


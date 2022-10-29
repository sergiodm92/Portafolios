import React from "react"
import styleNavbar from "./NavBar.module.scss"
import { useNavigate } from "react-router-dom"



export default function NavBar(){
    const nav = useNavigate()

    
    return (
        
        <div className={styleNavbar.box1}>
                    <button className={styleNavbar.Button} onClick={() => {nav(`/`)}}>
						<p className={styleNavbar.ptext}>Home</p>
					</button>
                    <button className={styleNavbar.Button} onClick={() => {nav(`/Aboutme`)}}>
						<p className={styleNavbar.ptext}>About</p>
					</button>
                    <button className={styleNavbar.Button} onClick={() => {nav(`/Skills`)}}>
						<p className={styleNavbar.ptext}>Skills</p>
					</button>
                    <button className={styleNavbar.Buttonsk} onClick={() => {nav(`/SoftSk`)}}>
						<p className={styleNavbar.ptextsk}>Soft <br></br>Skills</p>
					</button>
                    <button className={styleNavbar.Button} onClick={() => {nav(`/Projects`)}}>
						<p className={styleNavbar.ptext}>Projec.</p>
					</button>
                    <button className={styleNavbar.Button} onClick={() => {nav(`/Contact`)}}>
						<p className={styleNavbar.ptext}>Contact</p>
					</button>
            </div>
        
    )
}


import React from "react"
import { Link } from "react-router-dom"
import styleNavbar from "./NavBar.module.scss"
import { useNavigate } from "react-router-dom"


export default function NavBar(){
    const nav = useNavigate()
    return (
        <div className={styleNavbar.box1}>
                    <button className={styleNavbar.Button} onClick={() => {nav(`/Home`)}}>
						<p className={styleNavbar.ptext}>Home</p>
					</button>
                    <button className={styleNavbar.Button} onClick={() => {nav(`/Skills`)}}>
						<p className={styleNavbar.ptext}>Skills</p>
					</button>
                    <button className={styleNavbar.Button} onClick={() => {nav(`/Projects`)}}>
						<p className={styleNavbar.ptext}>Projects</p>
					</button>
                    <button className={styleNavbar.Button} onClick={() => {nav(`/Contact`)}}>
						<p className={styleNavbar.ptext}>Contact</p>
					</button>
              </div>
    )
}


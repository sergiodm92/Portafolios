import React from "react"
import styleNavbar from "./NavBar.module.scss"
import { useNavigate } from "react-router-dom"

export default function NavBar(){
    console.log(window.location.pathname)
    const nav = useNavigate()
    return (
        <div className={styleNavbar.nav}>
            <b className={window.location.pathname=="/" ? styleNavbar.btnHover: styleNavbar.btn } onClick={() => {nav(`/`)}}>Inicio</b>
			<b className={window.location.pathname=="/Aboutme" ? styleNavbar.btnHover: styleNavbar.btn } onClick={() => {nav(`/Aboutme`)}}>Sobre mi</b>
			<b className={window.location.pathname=="/Skills" ? styleNavbar.btnHover: styleNavbar.btn } onClick={() => {nav(`/Skills`)}}>Habilidades</b>
			<b className={window.location.pathname=="/SoftSk" ? styleNavbar.btnHover: styleNavbar.btn } onClick={() => {nav(`/SoftSk`)}}>Hab. Blandas</b>
			<b className={window.location.pathname=="/Projects" ? styleNavbar.btnHover: styleNavbar.btn } onClick={() => {nav(`/Projects`)}}>Proyectos</b>
			<b className={window.location.pathname=="/Contact" ? styleNavbar.btnHover: styleNavbar.btn } onClick={() => {nav(`/Contact`)}}>Contacto</b>
        </div>
    )
}


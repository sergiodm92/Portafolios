import React from "react";
import "./home.css";
import NavBar from "../NavBar/NavBar";
import styleHome from "./Home.module.scss";
import cv from "../../Utils/SERGIO DAVID.pdf";
import Button from "../Button/Button";
import ButtonRedes from "../Button/Button_redes";

export default function Home() {
  return (
    <div className={styleHome.all}>
      <div className={styleHome.back}>
        <div className={styleHome.divHome}>
          <div className={styleHome.divText}>
            <h5 className={styleHome.hello}>¡Hola! Soy</h5>
            <h3 className={styleHome.Name}>SERGIO DAVID</h3>
            <br />
            <br />
            <h6 className="line anim-typewriter">Full Stack Web Developer</h6>
          </div>
          <div className={styleHome.divButton}>
            <a
              href={cv}
              download="Sergio David - Full Stack Web Developer - CV 2022.pdf"
            >
              <div>
                <Button title={"Descargar CV.pdf"} />
              </div>
            </a>
          </div>
          <div className={styleHome.links}>
            <a href="https://github.com/sergiodm92">
              <ButtonRedes
                img={
                  "https://res.cloudinary.com/dk2al2urj/image/upload/v1664492964/MyPortfolio/logo_github_knnf2b.png"
                }
              />
            </a>
            <a href="mailto:crgiodm@gmail.com">
              <ButtonRedes
                img={
                  "https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-5.png"
                }
              />
            </a>
            <a href="https://www.linkedin.com/in/sergio-david-full-stack/">
              <ButtonRedes
                img={"https://pngimg.com/uploads/linkedIn/linkedIn_PNG6.png"}
              />
            </a>
          </div>
        </div>
        <div>
          <div className={styleHome.perfil}></div>
        </div>
      </div>
    </div>
  );
}

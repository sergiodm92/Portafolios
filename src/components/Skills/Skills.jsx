import React from "react";
import styleSkills from "./styleSkills.module.scss";
import ButtonRedes from "../Button/Button_redes";

export default function Skills() {
  return (
    <div className={styleSkills.all}>
      <div className={styleSkills.back1}>
        <div className={styleSkills.thirtAvatar}></div>
        <div className={styleSkills.skillsCard}>
          <div className={styleSkills.divone}>
            <a href="https://www.javascript.com/">
              <ButtonRedes
                img={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png"
                }
                text={"JavaScript"}
              />
            </a>
            <a href="https://www.typescriptlang.org/">
              <ButtonRedes
                img={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201"
                }
                text={"TypeScipt"}
              />
            </a>
            <a href="https://en.wikipedia.org/wiki/HTML5">
              <ButtonRedes
                img={
                  "https://adus.tech/wp-content/uploads/2021/05/html5-logo.png"
                }
                text={"HTML5"}
              />
            </a>
            <a href="https://en.wikipedia.org/wiki/CSS">
              <ButtonRedes
                img={
                  "https://exceltic.com/wp-content/uploads/2022/03/logo-css3.png"
                }
                text={"CSS"}
              />
            </a>
            <a href="https://sass-lang.com/">
              <ButtonRedes
                img={
                  "https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png"
                }
                text={"Mongo"}
              />
            </a>
            <a href="https://sequelize.org/">
              <ButtonRedes
                img={"https://sequelize.org/img/logo.svg"}
                text={"Sequalize"}
              />
            </a>
          </div>
          <div className={styleSkills.divtwo}>
            <a href="https://reactjs.org/">
              <ButtonRedes
                img={
                  "https://ionicframework.com/docs/icons/logo-react-icon.png"
                }
                text={"React"}
              />
            </a>
            <a href="https://nextjs.org/">
              <ButtonRedes
                img={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Next.js_Logotype_Light_Background.svg/640px-Next.js_Logotype_Light_Background.svg.png"
                }
                text={"Next.js"}
              />
            </a>
            <a href="https://redux.js.org/">
              <ButtonRedes
                img={
                  "https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55"
                }
                text={"Redux"}
              />
            </a>
            <a href="https://nodejs.org/en/">
              <ButtonRedes
                img={"https://cdn-icons-png.flaticon.com/512/919/919825.png"}
                text={"Node.js"}
              />
            </a>
            <a href="http://expressjs.com/">
              <ButtonRedes
                img={
                  "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png"
                }
                text={"Express.js"}
              />
            </a>
          </div>
          <div className={styleSkills.divthree}>
            <a href="https://firebase.google.com">
              <ButtonRedes
                img={
                  "https://miro.medium.com/max/600/1*R4c8lHBHuH5qyqOtZb3h-w.webp"
                }
                text={"Firebase"}
              />
            </a>
            <a href="https://getbootstrap.com/">
              <ButtonRedes
                img={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
                }
                text={"BootStrap"}
              />
            </a>
            <a href="https://mui.com/">
              <ButtonRedes
                img={
                  "https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png"
                }
                text={"Material-ui"}
              />
            </a>
            <a href="https://www.figma.com/">
              <ButtonRedes
                img={
                  "https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format"
                }
                text={"Figma"}
              />
            </a>
            <a href="https://trello.com/">
              <ButtonRedes
                img={"https://img.icons8.com/color/480/trello.png"}
                text={"Trello"}
              />
            </a>
          </div>
          <div className={styleSkills.divfour}>
            <a>
              <ButtonRedes
                img={
                  "http://visionyvalor.es/wp-content/uploads/2022/06/Ingl_s-20-350x358.gif"
                }
                text={"English.B1"}
              />
            </a>
            <a href="https://docs.github.com/es/get-started/quickstart/github-flow">
              <ButtonRedes
                img={"https://khaganat.net/wikhan/_media/fr:git_icon.png"}
                text={"GitFlow"}
              />
            </a>
          </div>
        </div>
        <div className={styleSkills.thirtAvatarB}></div>
      </div>
    </div>
  );
}

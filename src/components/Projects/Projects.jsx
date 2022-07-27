import React from "react";
import NavBar from "../Navbar/NavBar";
import styleProjects from "./StyleProjects.module.scss"
// import App from "../Carousel/carousel";
import { Carousel } from 'antd';

export default function Proyects(){
  
       
    return(
        <div>
            <div className={styleProjects.back}>
            <div className={styleProjects.navbar}>
                <NavBar/>
            </div>
            <div className={styleProjects.divHome}>
            <div className={styleProjects.contentStylediv}>
            <Carousel autoplay>
                <div className={styleProjects.contentStyle}>
                   
                    <img classname={styleProjects.imagen} src="https://http2.mlstatic.com/D_NQ_NP_968336-MLA47385359673_092021-O.webp"/>

                </div>
                <div className={styleProjects.contentStyle}>
                
                    <img src="https://http2.mlstatic.com/D_NQ_NP_968336-MLA47385359673_092021-O.webp" />
                </div>
                <div className={styleProjects.contentStyle}>
                
                <img src="https://http2.mlstatic.com/D_NQ_NP_968336-MLA47385359673_092021-O.webp" />
            </div>
            <div className={styleProjects.contentStyle}>
                <img classname={styleProjects.imagen} src="https://labyes.com/wp-content/uploads/2020/07/06Jul_LabyesNotaWeb-1024x684.png" />
            </div>

            </Carousel>
            </div>
            </div>
        
            </div>
        </div>
    )
}


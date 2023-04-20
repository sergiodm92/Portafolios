import React, { useState } from "react";
import Albums from "./Albums";
import styleProjects from "./StyleProjects.module.scss";
import CardProject from "../CardProjects/CardProject";
import { PaginationLeft } from "../Pagination/Pagination";
import { PaginationRight } from "../Pagination/Pagination";
import ButtonRedes from "../Button/Button_redes";
import Galeri from "../Galeri/Galeri";
const { Projects } = require("./Data.json");


export default function Proyects() {

  const [CurrentPage, setCurrentPage] = useState(1);
  const [ProjectsPerPage, setProjectsPerPage] = useState(1);
  const indexOfLastProjects = CurrentPage * ProjectsPerPage;
  const indexOfFirstProjects = indexOfLastProjects - ProjectsPerPage;


  let currentProjects;

  if (Projects.length > 0) {
    currentProjects = Projects?.slice(
      indexOfFirstProjects,
      indexOfLastProjects
    );
  }

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styleProjects.all}>
      <div className={styleProjects.galeri}>
       <Galeri 
       project={'gestion'}
       />
      </div>
      <div className={styleProjects.back}>
        {/* <div className={styleProjects.divPaginationLeft}>
          <PaginationLeft
            ProjectsPerPage={ProjectsPerPage}
            Projects={Projects.length}
            pagination={pagination}
            CurrentPage={CurrentPage}
          />
        </div> */}
       
        <div className={styleProjects.divHome}>
          
          {currentProjects.map((e, i) => {
            return (
              <div className={styleProjects.middle} key={i}>
                <div
                  className={
                    e.title !== "💼Porfolio"
                      ? styleProjects.links
                      : styleProjects.linkP
                  }
                  key={i}
                >
                  {/* <div className={styleProjects.butt}>
                    <a href={e.video}>
                      <ButtonRedes
                        img={
                          "https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                        }
                      />
                    </a>
                  </div>
                  <div className={styleProjects.butt}>
                    <a href={e.deploy}>
                      <ButtonRedes
                        img={
                          "https://cdn-icons-png.flaticon.com/512/282/282100.png"
                        }
                      />
                    </a>
                  </div>
                  <div className={styleProjects.butt}>
                    <a href={e.code}>
                      <ButtonRedes
                        img={
                          "https://res.cloudinary.com/dk2al2urj/image/upload/v1664492964/MyPortfolio/logo_github_knnf2b.png"
                        }
                      />
                    </a>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className={styleProjects.divPaginationRight}>
          <PaginationRight
            ProjectsPerPage={ProjectsPerPage}
            Projects={Projects.length}
            pagination={pagination}
            CurrentPage={CurrentPage}
          />
        </div> */}
      </div>
    </div>
  );
}

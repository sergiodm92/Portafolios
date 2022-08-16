import React, { useState } from "react";

import NavBar from "../NavBar/NavBar"
import styleProjects from "./StyleProjects.module.scss"

import CardProject from "../CardProjects/CardProject";

import { PaginationLeft } from "../Pagination/Pagination";
import {PaginationRight} from "../Pagination/Pagination";
const {Projects} = require("./Data.json")


export default function Proyects(){
    const [CurrentPage, setCurrentPage] = useState(1);
    const [ProjectsPerPage, setProjectsPerPage] = useState(1);
    const indexOfLastProjects = CurrentPage * ProjectsPerPage;
    const indexOfFirstProjects = indexOfLastProjects - ProjectsPerPage;
    const [lenguage,setLenguage] = useState(1)
  
    function len(){
    if(lenguage===1)setLenguage(0)
    if(lenguage===0)setLenguage(1)
    }
    
    let currentProjects
    if (Projects.length > 0) {
    currentProjects = Projects?.slice(
        indexOfFirstProjects,
        indexOfLastProjects
    )}
    const pagination = (pageNumber) => {setCurrentPage(pageNumber)}

    return(
        
            <div className={styleProjects.back}>
                <div className={styleProjects.navbar}>
                    <NavBar/>
                </div>
                <div className={styleProjects.divPaginationLeft}>
                    <PaginationLeft className={styleProjects.paginationleft}
                        ProjectsPerPage={ProjectsPerPage}
                        Projects={Projects.length}
                        pagination = {pagination}
                        CurrentPage = {CurrentPage}
                    />
                </div>
                <div className={styleProjects.divHome}>
                    <div className={styleProjects.switchButton} >
                        <p>English/Spanish</p>
                        <input type="checkbox"  id="switch-label" onChange={()=> len()} className={styleProjects.switchbuttoncheckbox} />
                        <label for="switch-label" className={styleProjects.switchButtonLabel} ></label>
                    </div>
                    
                        {currentProjects.map((e, i) => {
                        
                            return (
                                <div className={styleProjects.middle}>
                            <div className={styleProjects.carousel}>
                                {lenguage===0
                                    ?   <CardProject
                                            key={i}
                                            id={e.id}
                                            album={e.album}
                                            title={e.title}
                                            summary={e.summarySP}
                                            deploy={e.deploy}
                                            video={e.video}
                                        />
                                    :   <CardProject
                                            key={i}
                                            id={e.id}
                                            album={e.album}
                                            title={e.title}
                                            summary={e.summaryEN}
                                            deploy={e.deploy}
                                            video={e.video}
                                        />
                                }  
                            </div>
                  
                            <div className={styleProjects.links}>
                            <a href={e.video}><div className={styleProjects.youtube}></div></a>
                            <div className={styleProjects.deploy}></div>

                    </div>
                </div>
                );
                    })}
                </div>
              
                <div className={styleProjects.divPaginationRight}>
                    <PaginationRight className ="pagination"
                        ProjectsPerPage={ProjectsPerPage}
                        Projects={Projects.length}
                        pagination = {pagination}
                        CurrentPage = {CurrentPage}
                    />
                </div>
            
            </div>
        
    )
}


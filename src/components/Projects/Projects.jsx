import React from "react";
import NavBar from "../NavBar/NavBar";
import styleProjects from "./StyleProjects.module.scss";
import CardProject from "../CardProjects/CardProject";
import { useState } from "react";
// import PaginationLeft from "../Pagination/Pagination";
// import PaginationRight from "../Pagination/Pagination";
const {Projects} = require("./Data.json")


export default function Proyects(){
    const [CurrentPage, setCurrentPage] = useState(1);
    const [ProjectsPerPage, setProjectsPerPage] = useState(1);
    const indexOfLastProjects = CurrentPage * ProjectsPerPage;
    const indexOfFirstProjects = indexOfLastProjects - ProjectsPerPage;
    let currentProjects;
    let pubsFav=[];
    if (Projects.length > 0) {
    currentProjects = Projects?.slice(
        indexOfFirstProjects,
        indexOfLastProjects
    )}
    const pagination = (pageNumber) => {
        if(pageNumber==="<" )setCurrentPage(CurrentPage-1)
        else if(pageNumber===">")setCurrentPage(CurrentPage+1)
        else setCurrentPage(pageNumber)}


    return(
        <div>
            <div className={styleProjects.back}>
            <div className={styleProjects.navbar}>
                <NavBar/>
            </div>
                <div className={styleProjects.divHome}>

                <div>
                        {/* <PaginationLeft className ="pagination"
                            ProjectsPerPage={ProjectsPerPage}
                            Projects={Projects.length}
                            pagination = {pagination}
                            CurrentPage = {CurrentPage}
                        /> */}
                </div>
                {currentProjects.map((e, i) => {
                    return (
                    <div className={styleProjects.carousel}>
                        {/* <CardProject
                            key={i}
                            id={e.id}
                            album={e.album}
                            title={e.title}
                            summary={e.detail_resume}
                        /> */}
                    </div>
                );
                })}
                <div>
                        {/* <PaginationLeft className ="pagination"
                            ProjectsPerPage={ProjectsPerPage}
                            Projects={Projects.length}
                            pagination = {pagination}
                            CurrentPage = {CurrentPage}
                        /> */}
                </div>
                </div>
        
            </div>
        </div>
    )
}


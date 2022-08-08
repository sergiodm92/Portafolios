import React from "react";
import "./stylePagination.scss"


export function PaginationLeft({ProjectsPerPage, Projects, pagination, CurrentPage}){
    const pageNumbers = []
    const numbers = Math.ceil(Projects/ProjectsPerPage)
    for(let i=1; i<= numbers; i++){
        pageNumbers.push(i)
    }

    function left(){pagination(CurrentPage>1?CurrentPage-1:CurrentPage)}

    return(
        <div className="paginationleft" onClick={()=>left()}/>
    )
}


export function PaginationRight({ProjectsPerPage, Projects, pagination, CurrentPage}){
    const pageNumbers = []
    const numbers = Math.ceil(Projects/ProjectsPerPage)
    for(let i=1; i<= numbers; i++){
        pageNumbers.push(i)
    }
    function right(){pagination(CurrentPage<4?CurrentPage+1:CurrentPage)}

    return(
        <div className="paginationleft" onClick={()=>right()}/>
    )
}



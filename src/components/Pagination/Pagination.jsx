import React from "react";
import ButtonFlecha from "../Button/Button_flecha";
import "./stylePagination.scss"


export function PaginationLeft({ProjectsPerPage, Projects, pagination, CurrentPage}){
    const pageNumbers = []
    const numbers = Math.ceil(Projects/ProjectsPerPage)
    for(let i=1; i<= numbers; i++){
        pageNumbers.push(i)
    }

    function left(){pagination(CurrentPage>1?CurrentPage-1:CurrentPage)}

    return(
        <div className="paginationleft" >
            <ButtonFlecha
                img={"https://res.cloudinary.com/dk2al2urj/image/upload/v1667401377/MyPortfolio/flecha_mzgflr.png"}
                onClick={()=>left()}
            />
        </div>
    )
}


export function PaginationRight({ProjectsPerPage, Projects, pagination, CurrentPage}){
    const pageNumbers = []
    const numbers = Math.ceil(Projects/ProjectsPerPage)
    for(let i=1; i<= numbers; i++){
        pageNumbers.push(i)
    }
    function right(){pagination(CurrentPage<5?CurrentPage+1:CurrentPage)}

    return(
        <div className="paginationleft" >
            <ButtonFlecha
                img={"https://res.cloudinary.com/dk2al2urj/image/upload/v1667401377/MyPortfolio/flecha_mzgflr.png"}
                onClick={()=>right()}
            />
        </div>
    )
}



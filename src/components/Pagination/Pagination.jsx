import React from "react";
import "./stylePagination.scss"


export function PaginationLeft({ProjectsPerPage, Projects, pagination, CurrentPage}){
    const pageNumbers = []
    const reset=false
    const numbers = Math.ceil(Projects/ProjectsPerPage)
    for(let i=1; i<= numbers; i++){
        pageNumbers.push(i)
    }
    pageNumbers.push(">")
    if(CurrentPage===numbers)pageNumbers.pop()
    pageNumbers.unshift("<")
    if(CurrentPage===1)pageNumbers.shift()


    return(
        <div className="pagination2" >
                
                    {   
                        
                        pageNumbers && 
                        pageNumbers.map(Number=>{ return(
                            <div className="number" key={Number}>
                            <a onClick={()=>pagination(Number)}>
                            {Number==="<"?(<p className="currentNamber">{"<"}</p>):""} </a>
                            </div>)
                        })}
                
        </div>
    )
}


export function PaginationRight({ProjectsPerPage, Projects, pagination, CurrentPage}){
    const pageNumbers = []
    const reset=false
    const numbers = Math.ceil(Projects/ProjectsPerPage)
    for(let i=1; i<= numbers; i++){
        pageNumbers.push(i)
    }
    pageNumbers.push(">")
    if(CurrentPage===numbers)pageNumbers.pop()
    pageNumbers.unshift("<")
    if(CurrentPage===1)pageNumbers.shift()


    return(
        <div className="pagination2" >
                
                    {   
                        
                        pageNumbers && 
                        pageNumbers.map(Number=>{ return(
                            
                            <div className="number" key={Number}>
                            <a onClick={()=>pagination(Number)}>
                            {Number===">"?(<p className="currentNamber">{"<"}</p>):""} </a>
                          
                                
                            </div>)
                        })}
                
        </div>
    )
}



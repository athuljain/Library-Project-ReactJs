import React,{useContext} from "react";
import './Library.css'

import { LibraryContext } from "./Context";
import { useParams } from "react-router-dom";


const Library = ()=>{
    const {id}=useParams
    const data=useContext(LibraryContext)
    const book=data.formData.find((book)=> book.id === parseInt(id))


    return(
        <div className="Library">
            <h1 className="LibraryH1" >Book Details</h1>
            {data.formData.map((item)=>
            <div className="LibraryBody">
            <h2 className="BookTitle"> Book Title : {item.title}</h2>
            <h3 className="BookAuthor" > Book Author : {item.author}</h3>
            <h3 className="BookCategory"> Book Category : {item.category}</h3>
            <h3 className="BookNumber"> Book Number :{item.bookNo}</h3>

        </div>
            )}
            
        </div>

    )
}
export default Library
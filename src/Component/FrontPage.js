import React, { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import { LibraryContext } from "./Context";
import './FrontPage.css'

const FrontPage=()=>{
    const navigate=useNavigate()
    const data=useContext(LibraryContext)

    const AddBtnClick = ()=>{
        navigate('/addbook')
    }

    const titleClick = (book)=>{
        navigate(`/library/${book.id}`)
    }


    return(
        <div className="FrontPage">
        <h1 className="FrontPageHeading">My Library</h1>

        <ol className="FrontPageOrderdList">
            {data.formData.map((book)=>(
                <li className="FrontPageLi" key={book.id} onClick={()=> titleClick(book)} >
                    {book.title}
                </li>
            ))}
        </ol>

      <button className="FrontPageAddButton" onClick={AddBtnClick} >Add Book</button>
      </div>
    )
}
export default FrontPage
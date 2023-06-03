import React, { useContext,useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LibraryContext } from "./Context";
import './AddBook.css'



const AddBook=()=>{
    const navigate=useNavigate()
    const data=useContext(LibraryContext)
    const {formData,setFormData}=data

    const inputRef=useRef(null)

    const Submit=(e)=>{
        console.log(data.title);
        e.preventDefault()
    }

    const ButtonClick=()=>{
        const title=inputRef.current.title.value;
        const author=inputRef.current.author.value;
        const category=inputRef.current.category.value;
        const bookNo=inputRef.current.bookNo.value
        const id=Math.floor(Math.random()*1000)

        setFormData([...formData,{title, author , category , bookNo, id}])
        console.log(formData);
        navigate("/")
    }
    
    useEffect(()=>{
        inputRef.current.title.focus()
    })

    return(
        <div className="Addbook">
            <h1 className="AddBookHeading">Add Book Details</h1>
            <form className="AddBookFrom" ref={inputRef} onSubmit={Submit}>
            <h4 className="AddBookTitle" >title</h4> 
            <input className="AddBookInputTitle" type="text" placeholder="title" name="title" ></input>
           
            <h4 className="AddBookAuthor">author</h4>
            <input className="AddbookInputAuthor" type="text" placeholder="author" name="author" ></input>
            <h4 className="AddBookCategory" >category</h4>
            <input className="AddBookInputCategory" type="text" placeholder="category" name="category" ></input>
            <h4 className="AddBookBookNo">Book No</h4>
            <input className="AddBookInputBookNo" type="text" placeholder="book no:" name="bookNo" ></input>
            <br />
            <button className="AddBookSumbitButton" type="submit" onClick={ButtonClick} >Submit</button>
            </form>
        </div>
    )
}
export default AddBook
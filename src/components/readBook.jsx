import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const ReadBook = () => {
    let[books,setBooks] = useEffect([])
    let params=useParams() //to get route parameters
    useEffect(()=>{
        let fetchData = async () =>{
            let response = await fetch(`http://localhost:4000/books/${params.id}`)
            let data = await response.json()
            setBooks(data)
        }
        fetchData()
    },[])
    return ( 
        <div className="readBook">
            <div className="readcontent">
                <h1>{books.title}</h1>
                <p>{books.shortDescription}</p>
                <p>{books.longDescription}</p>
            </div>
            
        </div>
     );
}
 
export default ReadBook;
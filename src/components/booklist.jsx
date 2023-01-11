import { useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import '../styles/booklist.css'
import ReadBook from "./readBook";
const BookList = () => {
    let[books,setBooks] = useState([])

    //to fetch the route value(used fetch the entire data.In use params it just take only 1 paramaetre)
    let location = useLocation()

    useEffect(()=>{
        let fetchData = async ()=>{
            let response = await fetch('http://localhost:4000/books')
            let data = await response.json()
            setBooks(data)
        }
        fetchData()
    },[books])

    let handleRemove =(id,title)=>{
    //     setBooks(books.filter(x => x.id != id))
    //     alert(`${title} has been removed`)
            fetch(`http://localhost:4000/books/${id}`,{
                method :'DELETE'
            });
            alert(`${title} has been deleted permanently`)
    }
    let navigate = useNavigate();
    let read=(id)=>{
       if(location.pathname == "/admin/book-list"){
        navigate(`/admin/book-list/${id}`)
       }
       else{
        navigate(`/user/book-list/${id}`)
       }
    }
    return ( 
        <div className="bookList">
            <h1>BookList:{books.length}</h1>
            <div className="bookssection">
                {books.map((data)=>(
                    <div className="books">
                        <div className="images">
                            <img src={data.thumbnailUrl} alt="" />
                        </div>
                    <div className="book_card">
                        <h4>{data.title}</h4>
                        <h6>Authors : {data.authors.toString()}</h6>
                        <h6>Category : {data.categories.toString()}</h6>
                        <h6>Page Count : {data.pagecount} </h6>
                        <button onClick={()=>read(data.id)}>Read More</button>
                        {location.pathname == "/admin/book-list" && <button onClick={()=>handleRemove(data.id,data.title)}>Remove</button>}

                    </div>
                    </div>
                ))}
            </div>
            <ReadBook/>
        </div>
     );
}
export default BookList;
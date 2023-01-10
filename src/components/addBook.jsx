import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
    //title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    let [title, setTitle] = useState("")
    let [categories, setCategories] = useState("")
    let [authors, setAuthors] = useState("")
    let [pageCount, setPageCount] = useState("")
    let [shortDescription, setShortDescription] = useState("")
    let [longDescription, setLongDescription] = useState("")
    let [thumbnailUrl, setThumbnailUrl] = useState("")

    let navigate = useNavigate();

    let handleRemove = (e) => {
        e.preventDefault();
        //data to be posted
        let bookData = { title, categories, authors, pageCount, shortDescription, longDescription, thumbnailUrl }

        //posting data to the server
        fetch("http://localhost:4000/books", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringfy(bookData)
        })
        alert('Book Successfully added')
        navigate('/admin/book-list')

    }


    return (
        <div className="addBook">
            <h1>Add a Book</h1>
            <div className="form">
                <form action="" onSubmit={handleRemove}>
                    <div className="title">
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" required placeholder="title of the book" />
                    </div>
                    <div className="authors">
                        <input value={authors} onChange={(e) => setAuthors(e.target.value)} type="text" required placeholder="author of the book" />
                    </div>
                    <div className="categories">
                        <input value={categories} onChange={(e) => setCategories(e.target.value)} type="text" required placeholder="categories of the book" />
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(e) => setPageCount(e.target.value)} type="number" required placeholder="pageCount of the book" />
                    </div>
                    <div className="shortDescription">
                        <textarea value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} placeholder="shortDescription of the book" name="form_control" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea value={longDescription} onChange={(e) => setLongDescription(e.target.value)} placeholder="longDescription of the book" name="form_control" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input type="text" value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} />
                    </div>
                    <button type="submit">Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;
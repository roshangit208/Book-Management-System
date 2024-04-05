import "./Component.css"
import { useRef } from "react";
import axios from "axios";

const AddForm = () => {
    const title = useRef();
    const author = useRef();
    const year = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = {
            title: title.current.value,
            author: author.current.value,
            year: year.current.value
        }
        await axios.post("/book", newBook);
        window.location.reload();
    };

    return (
        <div className='wrapper-form d-flex align-items-center justify-content-center  w-25' id="form-1" style={{ backgroundColor: "#0096FF", height: "100vh" }}>
            <form className='d-flex flex-column justify-content-between h-50 w-75 rounded bg-light'  onSubmit={handleSubmit} style={{ padding: '10px' }}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" ref={title} />
                <label htmlFor="author">Author</label>
                <input type="text" name="author" ref={author} />
                <label htmlFor="year">Year</label>
                <input type='text' name='year' ref={year} />
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
}

export default AddForm;
